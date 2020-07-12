import React, {useState, useEffect, useCallback, useRef} from 'react';
import { OptionTypeBase } from 'react-select';
import logoImg from '../../assets/logo.svg';
import { Form } from '@unform/web';
import Dropzone from '../../components/Dropzone';
import {FormHandles} from '@unform/core';
import Input from '../../components/Input';
import PhoneInput from '../../components/PhoneInput';
import Select from '../../components/Select';
import { FiArrowLeft} from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import axios from 'axios';
import { Container,
        Content, 
        Header,
        FormContainer,
        DataContainer,
        AddressContainer,
        ItemsContainer,
        } from './styles';

interface Item {
  id: string;
  title: string;
  url_image: string;
  selected: boolean;
}

interface ibgeUFs {
  sigla: string;

}

interface OptionsSelect {
  label: string;
  value: string;
}

interface ibgeCities {
  nome: string;
}

interface CreatePointFormData {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

const CreatePoint: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [image, setImage] = useState<File>()

  const [listItems, setListItems] = useState<Item[]>([]);
 
  const [ufs, setUfs] = useState<OptionsSelect[]>([]);
  const [cities, setCities] = useState<OptionsSelect[]>([]);
  const [selectedUf, setSelectedUf] = useState<OptionTypeBase | null>();
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0])
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0])

  const handleSubmit = useCallback(
    async (data: CreatePointFormData) => {
      const selectedItems = listItems.filter( item => item.selected).map( item => {
        return item.id;
      });

      const items = selectedItems.join(',');
      const latitude = selectedPosition[0].toString();
      const longitude = selectedPosition[1].toString();
      const pointData = new FormData();

      if(image) {
        pointData.append('image', image);
      } 

      pointData.append('name', data.name);
      pointData.append('whatsapp', data.whatsapp);
      pointData.append('email', data.email);
      pointData.append('city', data.city);
      pointData.append('uf', data.uf);
      pointData.append('latitude', latitude);
      pointData.append('longitude', longitude);
      pointData.append('items', items);

      try {
        await api.post('points', pointData);
        history.push('/point-created');

      } catch (err) {
        throw new Error('Erro ao tentar incluir o ponto de coleta!');
      }
  },[history, image, listItems, selectedPosition]);
  
  const handleSelectedItem = useCallback((id: string) => {
      setListItems(state => 
        listItems.map((item) => {
          if(item.id === id) {
            if(item.selected){
              return {...item, selected: false};
            } else {
              return {...item, selected: true};
            }
          }
          else {
            return item;
          }   
        })
      );
  }, [listItems]);  

  const handleClickMap = useCallback((event: LeafletMouseEvent) => {
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng
    ])
  },[])

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude} = position.coords;
      setInitialPosition([latitude, longitude]);
    })
  },[])

  useEffect(() => {
    axios.get<ibgeUFs[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
          .then(response => {
            const ufsInitials = response.data.map(uf => (
              {
                label: uf.sigla,
                value: uf.sigla
              }
            ))
            setUfs(ufsInitials);
          });
  },[]);

  useEffect(() => {
    if(selectedUf !== undefined && selectedUf){
      axios.get<ibgeCities[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.value}/municipios`)
        .then(response => {
          setCities(
            response.data.map( city => (
              {
                label: city.nome,
                value: city.nome
              }
            ))
          )
        })
    }
  },[selectedUf]);
  
  useEffect(() => {
    api.get('items')
        .then((response) => {
          setListItems(response.data.map((item: Item) => ({
            ...item,
            selected: false
          })));
        });
  },[]); 
    
  return (
    <Container>
      <Content>
          <Header>
            <img src={logoImg} alt="Ecoleta"/>
            <Link to="/">
              <FiArrowLeft />
              Voltar para home
            </Link>
          </Header>
          <FormContainer>
              <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Cadastro do ponto <br />de coleta</h1>

              <Dropzone onFileUploaded={setImage}/>

              <DataContainer>
                <legend>Dados</legend>
                <label htmlFor="name">Nome da entidade</label>
                <Input  name="name" type="text" id="name"/>
                <label htmlFor="email">E-mail</label>
                <Input name="email" type="email"id="email"/>
                <label htmlFor="whatsapp">Whatsapp</label>
                <PhoneInput  
                  name="whatsapp" 
                  mask="(99) 9 9999-9999" 
                  alwaysShowMask
                  type="text"
                  id="whatsapp"/>
              </DataContainer>

              <AddressContainer>
                <legend>
                  Endereço
                  <span>Selecione o endereço no mapa</span>
                </legend>
                <Map center={initialPosition} zoom={15} onclick={handleClickMap}>
                        <TileLayer
                          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                      <Marker position={selectedPosition} />
                  </Map>

                <div id="field-group-container">
                    <div className="field-group">
                      <label htmlFor="uf">Estado ( UF )</label>
                      <Select name="uf" id="uf"                      
                      options={ufs} 
                      placeholder=""
                      isSearchable
                      onChange={(so): void => setSelectedUf(so)}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="city">Cidade</label>
                      <Select name="city" id="city" 
                      options={cities} 
                      placeholder=""
                      isSearchable
                      />
                    </div>
                </div>
              </AddressContainer>

              <ItemsContainer>
                  <legend>Ítems
                  <span>Selecione um ou mais itens de coleta</span>
                  </legend>
                  <ul>
                    {listItems.map( item => (
                        <li key={item.id} 
                          className={item.selected ? 'selected' : ''} 
                          onClick={() => handleSelectedItem(item.id)}
                        >
                          <img src={item.url_image} alt=""/>
                          <span>{item.title}</span>
                        </li>
                    ))}
                  </ul>
              </ItemsContainer>
              <button type="submit">Cadastrar ponto de coleta</button>
          </Form>
      </FormContainer>
    </Content>
    </Container>
  )
}

export default CreatePoint;