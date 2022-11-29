import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";


export default function App() {

  const product=

  [{
      "nome":"Meliodas",
      "id": 1,
      "imagem": 'https://lh3.googleusercontent.com/-BcutN5_lAeA/XxWDPrVVUhI/AAAAAAAAaXo/FnjXGuPeKMsZOvwCrJnwjehLjAbrLou9ACLcBGAsYHQ/w1200-h630-p-k-no-nu/1595245366679010-0.png'
      },
  {
      "nome":"Ben",
      "id": 2,
      "imagem": 'https://i.pinimg.com/736x/ac/65/7d/ac657d67d0195ff4c9b85437b0cc3e76--nanatsu-no-taizai-seven-deadly-sins.jpg'
      
  
  }, {  "nome":"Diane",
  "id": 3,
  "imagem": 'https://i.pinimg.com/originals/6b/55/af/6b55af461889dc27f0c603bf7fa06f50.jpg'
  ,
  }
, {  "nome":" Gowther",
  "id": 4,
  "imagem": 'https://tse1.explicit.bing.net/th?id=OIP.xL2AkkmJVKlZll5IqPuS6gHaEY&pid=Api&P=0'
  
   }, {  "nome":" King",
   "id": 5,
   "imagem": 'https://www.globalgeek.com.br/wp-content/uploads/2019/05/2e73ceec6b214e42739a1078733770cc.jpg'
   
    }, {  "nome":" Merlin",
    "id": 6,
    "imagem": 'https://tse3.mm.bing.net/th?id=OIP.4-edSFvfKXm_ud0XACTTLwHaDk&pid=Api&P=0'
    
     }, {  "nome":" Escanor",
     "id": 7,
     "imagem": 'https://i.pinimg.com/originals/fb/99/83/fb99837936c892b47b202db3dd0e49e6.jpg'
     
      }, {  "nome":" Liones",
      "id": 8,
      "imagem": 'https://tse2.mm.bing.net/th?id=OIP.3NIUdruZQW7hqqZlbZT7gAHaEK&pid=Api&P=0'
      
       }, {  "nome":" Hawk",
       "id": 9,
       "imagem": 'https://pm1.narvii.com/7337/08477d48a41deb5f3efdcaec2b76ce199ef5d381r1-480-486v2_hq.jpg'
       
        }]




  return (
    <ChakraProvider>
      {product.map((user)=>{
        return  <Card key={user.id} user={user} />
      })}
     
    </ChakraProvider>
  );
}
