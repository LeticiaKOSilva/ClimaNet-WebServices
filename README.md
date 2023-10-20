# ClimaNet-WebServices
### -> Implementação de um webapp (página web responsiva) que possua um campo de texto para o usuário digitar o nome de uma cidade e um botão para iniciar a requisição. Ao clicar no botão (ou pressionar enter no campo de busca), deverá ser realizada uma consulta à API de previsão do tempo do site OpenWeatherMap.

-Link do site:
  [ClimaNet](https://leticiakosilva.github.io/ClimaNet-WebServices/)
  
- O site vai extrair da API do site OpenWeatherMap as seguintes informações:
  
  - A temperatura atual, máxima e mínima para a cidade, em graus Celsius;
  - Uma opção para visualizar essas mesmas temperaturas em Kelvin;
  - A descrição textual da condição climática;
  - Uma imagem com a condição do tempo (fornecida pela própria API);
  - O horário do nascimento e do pôr do sol (converter os timestamps);
  - A velocidade do vento.

- O site terá uma UI/UX com:
  -  A temperatura atual deverá ser exibida em destaque, no centro da página, com fonte extra grande;
  -  A cor de fundo da página deverá ser atualizada de acordo com a temperatura: quanto mais quente, mais vermelho, quanto mais frio mais azul. Usar no mínimo 10 variações de cores possíveis;
  -  Deverá ser utilizada pelo menos um fonte tipográfica externa (Google Fonts);
  -  Deverão ser utilizados pelo menos 3 ícones (Font Awesome Icons ou outra biblioteca de fontes CSS).

- Para este projeto foram criados 3 arquivos:
  - climaNet.js;
  - index.html;
  - climaNet.css;

- No arquivo index.html foi feito:
  - Link da fonte do google utilizada que foi o Roboto;
  - Link do google icons para utilizar os 3 ícones escolhidos, que foram para representar: A velocidade do vento, narcer do sol e pôr do sol;
  - Header que contém o nome do site "ClimaNet" e um campo de busca para que o usuário busque uma cidade específica;
  - Divs que ficaram ocultas até que o usuário precione a tecla Enter ou clique no botão procurar e assim a API openWeather
 encontra e o arquivo climaNet.js manipule e os organize os dados dentro das divs.

- No arquivo climaNet.css foi feito:
   - A divisão de pixels para computadores, tablets e celulares;
   - Estilização do cabeçalho;
   - Estilização das divs.

- No arquivo climaNet.js foi feito:
  - Requisição a API OpenWeather;
  - Manipulação e inserção dos dados dentro do site;
  - Método para converter graus Celsius para Kelvin.


## ->Funcionamento

### Página antes da requisição:
<img src="https://github.com/LeticiaKOSilva/ClimaNet-WebServices/blob/main/Imagens/climaNet.png" width = "900px">

### Página depois da requisição:
<img src="https://github.com/LeticiaKOSilva/ClimaNet-WebServices/blob/main/Imagens/climaNetResult.png" width = "900px">

  
