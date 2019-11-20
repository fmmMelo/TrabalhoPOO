function mapaMultiplosMarcadores(){
    let mapaMultiplosMarcadores;
    let divMapaMarcadores = document.getElementById('mapa-marcadores');
    let locais = [ 
      { 
        nome: 'IFMS',
        descricao: 'Instituto Federal de Mato Grosso do Sul - Campus Dourados',
        endereco: 'Endereço: R. Filinto Müller, 1790 - Canaã I, Dourados - MS, 79833-520',
        telefone: 'Telefone contato: (67) 3410-8500',
        gm: '<a style="text-decoration: none;" href="https://www.google.com/maps/place/Instituto+Federal+de+Mato+Grosso+do+Sul+(IFMS)/@-22.2089873,-54.7670866,17z/data=!3m1!4b1!4m5!3m4!1s0x9489a8cb0944a387:0xb5931d768f1f95fe!8m2!3d-22.2089923!4d-54.7648979">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.208694,  lng: -54.764941 }
      },
      { 
        nome: 'Lar Santa Rita',
        descricao: 'Lar Santa Rita - Dourados',
        endereco: 'Endereço: R. Toshinobu Katayama, 1033 - Vila Planalto, Dourados - MS, 79826-110',
        telefone: 'Telefone contato: (67) 3421-9966',
        gm: '<a style="text-decoration: none;" href="https://www.google.com/maps/place/Lar+Santa+Rita/@-22.2224646,-54.8072764,17z/data=!3m1!4b1!4m5!3m4!1s0x9489a835189397bf:0xb0d8c351de976f2d!8m2!3d-22.2224696!4d-54.8050877">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.2224646,  lng: -54.8050877 }
      },
      { 
        nome: 'UFGD - Universidade Federal da Grande Dourados',
        descricao: 'UFGD - Universidade Federal da Grande Dourados - Dourados',
        endereco: 'Rod. Dourados-Itahum, Km 12 - Cidade Universitaria, Dourados - MS, 79804-970',
        telefone: 'Telefone contato: (67) 3410-2920',
        gm: '<a style="text-decoration: none" href="https://www.google.com/maps/place/UFGD/@-22.196199,-54.9313275,16z/data=!4m12!1m6!3m5!1s0x0:0xf3c3551e18ac1893!2sUniversidade+Federal+da+Grande+Dourados+-+Unidade+I!8m2!3d-22.216638!4d-54.8151013!3m4!1s0x9489a84eaecb9a25:0x4a73b8f7660f5f81!8m2!3d-22.1949748!4d-54.9315038">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.1949753,  lng: -54.9315035 }
      },
      { 
        nome: 'Paróquia São Carlos',
        descricao: 'Paróquia São Carlos - Dourados',
        endereco: 'R. Hayel Bon Faker, 4600 - Jardim Santana, Dourados - MS, 79826-280',
        telefone: 'Telefone contato: (67) 3422-6767',
        gm: '<a style="text-decoration: none;" href="https://www.google.com/maps/place/Par%C3%B3quia+S%C3%A3o+Carlos/@-22.208893,-54.810269,15z/data=!4m2!3m1!1s0x0:0x5e66655842c1de1b?sa=X&ved=2ahUKEwiVtaHS6_flAhWgFLkGHbCKDIgQ_BIwCnoECAsQCA">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.208893,  lng: -54.810269 }
      },
      { 
        nome: 'Casa Criança Feliz',
        descricao: 'Casa Criança Feliz - Dourados',
        endereco: 'R. Ramão Osório, 535 - Vila Sao Braz, Dourados - MS, 79843-250',
        telefone: 'Telefone contato: (67) 3424-4673', 
        gm: '<a style="text-decoration: none;" href="https://www.google.com/maps/place/Casa+Crian%C3%A7a+Feliz/@-22.243384,-54.739562,15z/data=!4m5!3m4!1s0x0:0x54b3c47f853ac91a!8m2!3d-22.243384!4d-54.739562">Visualize no Google Maps</a>',
        latitudeLongitude: { lat: -22.243384,  lng: -54.739562 }
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
              '<p>' + local.telefone + '</p>'+
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