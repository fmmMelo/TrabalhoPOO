function mapaMultiplosMarcadores(){
    let mapaMultiplosMarcadores;
    let divMapaMarcadores = document.getElementById('mapa-marcadores');
    let locais = [ 
      { 
        nome: 'IFMS',
        descricao: 'Instituto Federal de Mato Grosso do Sul - Campus Dourados',
        endereco: 'Endereço: R. Filinto Müller, 1790 - Canaã I, Dourados - MS, 79833-520',
        pais: 'Pais: Brasil', 
        gm: '<a style="text-decoration: none;" href="https://www.google.com/maps/place/Instituto+Federal+de+Mato+Grosso+do+Sul+(IFMS)/@-22.2089873,-54.7670866,17z/data=!3m1!4b1!4m5!3m4!1s0x9489a8cb0944a387:0xb5931d768f1f95fe!8m2!3d-22.2089923!4d-54.7648979">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.208694,  lng: -54.764941 }
      },
      { 
        nome: 'Lar Santa Rita',
        descricao: 'Lar Santa Rita - Dourados',
        endereco: 'Endereço: R. Toshinobu Katayama, 1033 - Vila Planalto, Dourados - MS, 79826-110',
        pais: 'Pais: Brasil', 
        gm: '<a style="text-decoration: none;" href="https://www.google.com/maps/place/Lar+Santa+Rita/@-22.2224646,-54.8072764,17z/data=!3m1!4b1!4m5!3m4!1s0x9489a835189397bf:0xb0d8c351de976f2d!8m2!3d-22.2224696!4d-54.8050877">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.2224646,  lng: -54.8050877 }
      },
      { 
        nome: 'Casa Criança Feliz',
        descricao: 'Casa Criança Feliz - Dourados',
        endereco: 'R. Ramão Osório, 535 - Vila Sao Braz, Dourados - MS, 79843-250',
        pais: 'Pais: Brasil', 
        gm: '<a style="text-decoration: none;" href="https://www.google.com/search?q=casa%20da%20crian%C3%A7a%20Dourados&oq=casa&aqs=chrome.2.69i57j0j69i59j0j69i60l4.1991j0j7&sourceid=chrome&ie=UTF-8&safe=active&sxsrf=ACYBGNQfJntpLoQiVsLw3QZ-VPKH2yTHCg:1574216857342&npsic=0&rflfq=1&rlha=0&rllag=-22233992,-54772312,3526&tbm=lcl&rldimm=6103437971992267034&ved=2ahUKEwjdgtPk3vflAhWaErkGHW48CucQvS4wAHoECAsQIA&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:;mv:[[-22.2105993,-54.7350154],[-22.2452397,-54.8198855]]">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.2452397,  lng: -54.8198855 }
      },
    ];  
    
    mapaMultiplosMarcadores = new google.maps.Map(divMapaMarcadores, {
      center: locais[0].latitudeLongitude, // IFMS como centro do Mapa
      zoom: 13 // zoom do mapa
    });
       
    /* Criar múltiplos marcadores */
    
    locais.forEach(function(local){
      /* Criação de um novo marcador no mapa */
      let marker = new google.maps.Marker({
        position: local.latitudeLongitude,
        map: mapaMultiplosMarcadores,
        title: local.nome
      }); 
      
      /* Conteúdo HTML que representa a janela de informações que aparece quando o marcador é selecionado. Essa estrutura HTML é padrão da API de mapas do Google */
      let conteudoJanelaInformacoes = '<div id="content" style="text-align: justify;">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">'+ local.nome + '</h1>'+
              '<div id="bodyContent">'+
              '<p>' + local.descricao + '</p>'+
              '<p>' + local.endereco + '</p>'+
              '<p>' + local.pais + '</p>'+
              '<p>'+local.gm+'</p>'+
              '</div>'+
          '</div>';
  
       /* Instanciação de uma nova janela de informações */
      let infowindow = new google.maps.InfoWindow({
        content: conteudoJanelaInformacoes
      });
      
      /* Quando um marcador é 'clicado', a janela de informações é aberta sobre o mapa */
      marker.addListener('click', function() {
        infowindow.open(mapaMultiplosMarcadores, marker);
      });    
    });
  }
        
  /* Função para inicialização do Mapa (manter o nome initMap) */
  function initMap() {
    mapaMultiplosMarcadores();
  }