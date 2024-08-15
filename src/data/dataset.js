const bebidas = [
    {
      "id": "mojitoRefrescante001",
      "name": "Mojito Refrescante",
      "shortDescription": "Refrescante y delicioso, con un toque de menta y limón.",
      "description": "Este Mojito Refrescante es una explosión de sabores que te transportará a una playa paradisíaca. Preparado con una combinación de ron blanco, limón, menta, azúcar y soda, es la bebida perfecta para refrescar tu día. Ideal para cualquier ocasión, su sabor único y refrescante hará que te sientas como si estuvieras de vacaciones en un lugar tropical. Disfruta de cada sorbo de esta delicia que te brindará una experiencia inigualable, mezclando la frescura cítrica con la dulzura del ron y el toque herbal de la menta, creando así un cóctel que celebra la esencia del verano y la relajación.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/mojitoRefrescante001.jpeg",
      "facts": {
        "alcoholContent": "7.5% ABV",
        "calorias": "120",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve con mucho hielo y una ramita de menta fresca para darle un toque aún más especial!"
    },
    {
      "id": "pinacoladaTropical002",
      "name": "Piña Colada Tropical",
      "shortDescription": "Dulce y cremoso, con el sabor tropical de la piña y el coco.",
      "description": "La Piña Colada Tropical es el cóctel perfecto para sentirte en una isla paradisíaca con cada sorbo. Preparada meticulosamente con una deliciosa combinación de ron blanco, crema de coco suave, jugo de piña refrescante y hielo triturado, ofrece una explosión de sabor y frescura en cada trago. Este cóctel te transportará directamente a la playa, brindándote una experiencia sensorial única y memorable. Disfruta de esta bebida y déjate llevar por su encanto tropical, ideal para relajarte y disfrutar bajo el sol, mientras sueñas con las suaves olas y el cálido viento del paraíso caribeño.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/pinacoladaTropical002.jpeg",
      "facts": {
        "alcoholContent": "8% ABV",
        "calorias": "180",
        "tiempoDePreparacion": "7 minutos",
      },
      "extraInfo": "¡Decora con una rodaja de piña y un paraguas de cóctel para un toque aún más festivo!"
    },
    {
      "id": "margaritaClasica003",
      "name": "Margarita Clásica",
      "shortDescription": "Agrio, salado y delicioso, con un toque de tequila y lima.",
      "description": "La Margarita Clásica es un cóctel imprescindible para cualquier ocasión festiva, ideal para animar cualquier celebración. Preparada con una mezcla perfecta de tequila de calidad, triple sec, jugo de lima fresco y un toque sutil de jarabe de agave, es una explosión de sabores cítricos y dulces que te dejará queriendo más. Cada sorbo de esta refrescante bebida es una celebración en sí misma. Levanta tu copa, brinda por los buenos momentos y disfruta de esta icónica y revitalizante creación. ¡Salud a la vida y al placer de compartir momentos memorables con amigos y familia!",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/margaritaClasica003.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "150",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en un vaso escarchado con sal y una rodaja de lima para una presentación espectacular!"
    },
    {
      "id": "daiquiriFresa004",
      "name": "Daiquiri de Fresa",
      "shortDescription": "Dulce, refrescante y repleto de sabor a fresa fresca.",
      "description": "El Daiquiri de Fresa es una deliciosa variación del clásico cóctel Daiquiri, ideal para quienes disfrutan de los sabores afrutados. Preparado con ron blanco de calidad, fresas frescas que aportan un toque natural y vibrante, jugo de limón recién exprimido y jarabe de azúcar, este cóctel ofrece un equilibrio perfecto entre lo dulce y lo ácido. Además, su preparación es sencilla, permitiendo disfrutar de su refrescante sabor en cualquier ocasión. Es la elección perfecta para los amantes de las fresas y las bebidas dulces, brindando una experiencia refrescante y deliciosa en cada sorbo, especialmente en los días cálidos de verano.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/daiquiriFresa004.jpeg",
      "facts": {
        "alcoholContent": "8.5% ABV",
        "calorias": "140",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con una fresa en el borde del vaso para un toque de color y frescura adicional!"
    },
    {
      "id": "caipirinhaBrasilena005",
      "name": "Caipirinha Brasileña",
      "shortDescription": "Cítrica, refrescante y llena de sabor a lima fresca.",
      "description": "La Caipirinha Brasileña es el cóctel nacional de Brasil y una verdadera delicia para el paladar, conocida por su frescura y sabor distintivo. Preparada con cachaça, un aguardiente tradicional brasileño, lima fresca cortada en trozos, azúcar y hielo triturado, esta bebida es perfecta para disfrutar en cualquier ocasión, ya sea una fiesta, una reunión con amigos o una tarde relajada. Su combinación equilibrada de sabores cítricos y dulces la convierte en una experiencia irresistible y refrescante. Además, es una bebida versátil que se adapta a diversos gustos y preferencias, haciendo que cada sorbo sea una celebración de la cultura brasileña.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/caipirinhaBrasilen%CC%83a005.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "160",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en un vaso corto con mucho hielo y disfruta del sabor tropical de Brasil!"
    },
    {
      "id": "sangriaEspanola006",
      "name": "Sangría Española",
      "shortDescription": "Frutal, refrescante y perfecta para compartir con amigos.",
      "description": "La Sangría Española es una bebida clásica y emblemática de España, perfecta para cualquier celebración. Combina vino tinto de calidad con una mezcla de frutas frescas que le aportan un sabor jugoso y refrescante. El jugo de naranja y un toque de brandy le añaden profundidad, mientras que la soda proporciona una efervescencia ligera y agradable. Esta deliciosa bebida es ideal para fiestas y reuniones familiares, convirtiéndose en la opción preferida para compartir momentos especiales con seres queridos. Además, su preparación versátil permite personalizarla según los gustos individuales, haciendo que cada vaso de sangría sea una experiencia única y festiva.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/sangriaEspan%CC%83ola006.jpeg",
      "facts": {
        "alcoholContent": "7% ABV",
        "calorias": "180",
        "tiempoDePreparacion": "10 minutos",
      },
      "extraInfo": "¡Decora con rodajas de naranja, limón y trozos de frutas para una presentación impresionante!"
    },
    {
      "id": "mintJulepRefrescante007",
      "name": "Mint Julep Refrescante",
      "shortDescription": "Refrescante y aromático, con un toque de menta fresca y bourbon.",
      "description": "El Mint Julep es un cóctel que captura la esencia del sur de Estados Unidos con su sabor distintivo. Preparado con una mezcla de bourbon de alta calidad, azúcar, agua y hojas de menta fresca, este cóctel ofrece una combinación perfecta de dulzura y frescura. Es ideal para disfrutar en un caluroso día de verano, brindando una sensación refrescante y revitalizante. Perfecto para cualquier ocasión, el Mint Julep es una opción elegante y deliciosa. Además, su presentación en un vaso de plata o cobre añade un toque de sofisticación, haciendo que cada sorbo sea una experiencia memorable y auténtica.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/mintJulepRefrescante007.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "160",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en un vaso de julepe de plata con mucho hielo triturado y una ramita de menta para una presentación elegante!"
    },
    {
      "id": "moscowMuleRefrescante008",
      "name": "Moscow Mule Refrescante",
      "shortDescription": "Picante, refrescante y con un toque de lima, servido en una taza de cobre.",
      "description": "El Moscow Mule Refrescante es un cóctel clásico y popular que combina vodka de alta calidad, ginger beer picante y jugo de lima fresco. Esta mezcla ofrece una explosión de sabores vibrantes y revitalizantes. Tradicionalmente, se sirve en una icónica taza de cobre, lo que ayuda a mantener la bebida fría y realza su frescura y sabor distintivo. Ideal para cualquier ocasión, el Moscow Mule es perfecto para disfrutar en reuniones con amigos o en una relajada tarde de verano.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/moscowMuleRefrescante008.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "150",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con una rodaja de lima y una ramita de menta para una presentación impresionante!"
    },
    {
      "id": "whiskeySourClasico009",
      "name": "Whiskey Sour Clásico",
      "shortDescription": "Agrio, dulce y delicioso, con un toque de bourbon y limón.",
      "description": "El Whiskey Sour es un cóctel atemporal que combina bourbon de alta calidad, jugo de limón, azúcar para equilibrar los sabores y una clara de huevo que aporta una textura suave y cremosa. Este cóctel ofrece una experiencia entre lo dulce, lo ácido y lo robusto del whiskey. Perfecto para cualquier ocasión, el Whiskey Sour es una opción clásica que siempre impresiona por su sabor y sofisticación. Además, su presentación con una rodaja de limón o una cereza marrasquino realza su atractivo visual, haciendo que cada sorbo sea un deleite tanto para el paladar como para la vista.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/whiskeySourClasico009.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "170",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con una cereza maraschino y una rodaja de limón para un toque de color!"
    },
    {
      "id": "palomaRefrescante010",
      "name": "Paloma Refrescante",
      "shortDescription": "Refrescante y cítrica, con tequila y refresco de toronja.",
      "description": "La Paloma Refrescante es un cóctel mexicano que combina tequila de calidad con refresco de toronja, jugo de lima y un toque de sal en el borde del vaso. Esta mezcla ofrece una experiencia refrescante y equilibrada, resaltando los sabores cítricos y herbáceos del tequila. Es la opción perfecta para disfrutar en cualquier ocasión, ya sea en una fiesta, junto a la piscina o simplemente para refrescarse en un día caluroso. Su presentación en un vaso alto con hielo y una rodaja de toronja como adorno no solo es atractiva, sino que también realza su carácter festivo.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/palomaRefrescante010.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "140",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en un vaso alto con hielo y una rodaja de toronja para una presentación elegante!"
    },
    {
      "id": "ginTonicRefrescante011",
      "name": "Gin Tonic Refrescante",
      "shortDescription": "Crisp, refrescante y con un toque de enebro, servido con una rodaja de limón.",
      "description": "El Gin Tonic es un clásico que nunca pasa de moda. Elaborado con ginebra, tónica burbujeante y una rodaja de limón, este cóctel ofrece una combinación de sabores herbáceos y cítricos. Su elegancia y simplicidad lo convierten en la opción ideal para la ocasión, desde reuniones elegantes hasta momentos de relajación. Refrescante y versátil, el Gin Tonic es la elección para aquellos que aprecian la sofisticación en cada sorbo. Además, su presentación en un vaso alto con hielo y una rodaja de limón o pepino no solo es atractiva, sino que también realza su carácter refrescante y distinguido.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/ginTonicRefrescante011.jpeg",
      "facts": {
        "alcoholContent": "8% ABV",
        "calorias": "120",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con bayas de enebro y una rodaja de limón para un toque de sofisticación!"
    },
    {
      "id": "bloodyMaryPicante012",
      "name": "Bloody Mary Picante",
      "shortDescription": "Picante, sabroso y lleno de sabor a tomate, con un toque de vodka.",
      "description": "El Bloody Mary Picante es un cóctel favorito entre los amantes del tomate y la pimienta. Preparado con vodka de calidad, jugo de tomate fresco, salsa picante que añade un toque de intensidad, jugo de limón para un toque cítrico y una mezcla de condimentos aromáticos, es la elección perfecta para despertar tus papilas gustativas. Este cóctel versátil y lleno de sabor es ideal tanto para comenzar el día como para disfrutar en cualquier momento, ofreciendo una experiencia culinaria y refrescante única.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/bloodyMaryPicante012.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "160",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con un tallo de apio, una aceituna y una rodaja de limón para un toque de sabor adicional!"
    },
    {
      "id": "maiTaiTropical013",
      "name": "Mai Tai Tropical",
      "shortDescription": "Exótico, dulce y con un toque de ron y almendra.",
      "description": "El Mai Tai es una bebida exótica y vibrante que combina la frescura del ron blanco y del ron oscuro con jugo de lima, almendra, triple sec para dulzura y un toque final de granadina que le da un color y sabor característicos. Este cóctel es la elección perfecta para disfrutar en una tarde soleada, transportándote a un ambiente tropical con cada sorbo. Además, su presentación en un vaso decorado con una rodaja de piña y una cereza marrasquino lo hace aún más atractivo y apetecible, realzando su carácter festivo y refrescante.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/maiTaiTropical013.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "170",
        "tiempoDePreparacion": "7 minutos",
      },
      "extraInfo": "¡Decora con una rodaja de piña, una cereza y una sombrilla para un toque tropical!"
    },
    {
      "id": "cosmopolitanElegante014",
      "name": "Cosmopolitan Elegante",
      "shortDescription": "Sofisticado, dulce y con un toque de vodka y arándano.",
      "description": "El Cosmopolitan es un cóctel sofisticado que combina vodka, triple sec para un toque de dulzura, jugo de arándano que le da su color y jugo de lima para un toque cítrico refrescante. Esta bebida es conocida por su elegancia y equilibrio de sabores, siendo la elección perfecta para una noche de fiesta o una celebración especial. Disfrútalo por su sabor refinado y su capacidad para elevar cualquier ocasión. Además, su presentación en una copa de martini, adornada con una rodaja de lima o una cereza, añade un toque visual que realza su atractivo y distinción.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/cosmopolitanElegante014.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "150",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en una copa de martini con una cáscara de lima para un toque de sofisticación!"
    },
    {
      "id": "piscoSourPeruano015",
      "name": "Pisco Sour Peruano",
      "shortDescription": "Ácido, refrescante y con un toque de pisco y limón.",
      "description": "El Pisco Sour Peruano es el cóctel nacional de Perú y una verdadera delicia para el paladar. Preparado con pisco, un licor de uva peruano de calidad, jugo fresco de limón que le aporta un toque ácido y refrescante, jarabe de azúcar que equilibra los sabores, clara de huevo para una textura suave y espumosa, y un toque final de amargo de angostura que realza su complejidad. Es una explosión de sabor y frescura que captura la esencia de la cultura peruana en cada sorbo.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/piscoSourPeruano015.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "160",
        "tiempoDePreparacion": "7 minutos",
      },
      "extraInfo": "¡Decora con una rodaja de limón y un toque de canela en polvo para un toque adicional de sabor!"
    },
    {
      "id": "blueLagoonRefrescante016",
      "name": "Blue Lagoon Refrescante",
      "shortDescription": "Azul, refrescante y con un toque de vodka y curaçao azul.",
      "description": "El Blue Lagoon es un cóctel llamativo que combina vodka con curaçao azul, creando un color un sabor vibrante. La limonada añade un toque cítrico que equilibra la dulzura del curaçao, resultando en una bebida agradable al paladar. Este cóctel es perfecto para fiestas, por su capacidad para refrescar y animar cualquier ocasión especial. Además, su presentación en un vaso alto con hielo y una rodaja de limón o una cereza como decoración, realza su atractivo visual y lo convierte en una opción irresistible para cualquier evento.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/blueLagoonRefrescante016.jpeg",
      "facts": {
        "alcoholContent": "8.5% ABV",
        "calorias": "140",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en un vaso alto con hielo y una rodaja de limón para un toque de frescura!"
    },
    {
      "id": "caipiroskaFrutas017",
      "name": "Caipiroska de Frutas",
      "shortDescription": "Frutal, refrescante y con un toque de vodka y frutas frescas.",
      "description": "La Caipiroska de Frutas es una variación del clásico cóctel brasileño, elaborada con vodka, una mezcla de frutas frescas que añaden colores y sabores, azúcar para equilibrar la acidez y hielo para mantenerla refrescante. Esta opción colorida y deliciosa es perfecta para disfrutar en cualquier ocasión, ofreciendo una experiencia refrescante y frutal que resalta la diversidad y la creatividad de la mixología moderna. Su preparación meticulosa permite combinar diferentes frutas como fresas, kiwi, piña y mango, cada una aportando su propia intensidad de sabor, creando así un cóctel visualmente atractivo y lleno de matices para deleitar todos los sentidos.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/caipiroskaFrutas017.jpeg",
      "facts": {
        "alcoholContent": "8% ABV",
        "calorias": "150",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con trozos de frutas frescas y una ramita de menta para un toque de color y frescura!"
    },
    {
      "id": "pinaColadaFrozen018",
      "name": "Piña Colada Frozen",
      "shortDescription": "Congelada, cremosa y con un toque de ron y piña.",
      "description": "La Piña Colada Frozen es una deliciosa versión congelada del clásico cóctel tropical. Elaborada con ron blanco de calidad, crema de coco para una textura suave y dulce, jugo de piña fresco que añade un sabor tropical y hielo triturado para mantenerla fría y refrescante, esta bebida es ideal para disfrutar en un día caluroso. Su cremosidad y sabores exóticos la convierten en la opción perfecta para transportarte instantáneamente a un ambiente tropical con cada sorbo. Además, su presentación con una rodaja de piña y un parasol como adornos añade un toque visual que complementa su irresistible atractivo veraniego.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/pinaColadaFrozen018.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "180",
        "tiempoDePreparacion": "7 minutos",
      },
      "extraInfo": "¡Sirve en una copa de margarita con un borde escarchado de coco para una presentación espectacular!"
    },
    {
      "id": "tequilaSunriseTropical019",
      "name": "Tequila Sunrise Tropical",
      "shortDescription": "Colorido, refrescante y con un toque de tequila, jugo de naranja y granadina.",
      "description": "El Tequila Sunrise Tropical es un cóctel vibrante y lleno de color que combina tequila de calidad con jugo de naranja fresco, creando un fondo cítrico y refrescante. La adición de granadina en el centro del vaso crea un efecto visual que simula un amanecer tropical, añadiendo además un toque de dulzura. Esta bebida es perfecta para disfrutar en una tarde soleada, proporcionando una experiencia sensorial única que evoca la calidez y la belleza de un día tropical. Su presentación con hielo y una rodaja de naranja como decoración realza su atractivo visual y complementa su sabor exuberante y refrescante.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/tequilaSunriseTropical019.jpeg",
      "facts": {
        "alcoholContent": "9% ABV",
        "calorias": "160",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con una rodaja de naranja y una cereza maraschino para un toque de color!"
    },
    {
      "id": "margaritaMango020",
      "name": "Margarita de Mango",
      "shortDescription": "Dulce, ácido y con un toque de tequila y mango fresco.",
      "description": "La Margarita de Mango es una variación del clásico cóctel Margarita. Elaborada con tequila, triple sec para dulzura, jugo de lima que añade un toque cítrico y puré de mango que aporta una dulzura tropical, esta bebida es refrescante y exótica. Perfecta para disfrutar en cualquier ocasión, la Margarita de Mango ofrece una experiencia sensorial única que combina sabores intensos y frescos con la calidez del tequila. Además, su presentación con sal en el borde del vaso y una rodaja de mango como garnitura no solo realza su atractivo visual, sino que también resalta su perfil tropical y festivo.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/margaritaMango020.jpeg",
      "facts": {
        "alcoholContent": "8.5% ABV",
        "calorias": "150",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en un vaso escarchado con sal y una rodaja de lima para una presentación espectacular!"
    },
    {
      "id": "gimletPepino021",
      "name": "Gimlet de Pepino",
      "shortDescription": "Refrescante, herbal y con un toque de gin y pepino fresco.",
      "description": "El Gimlet de Pepino combina gin premium, jugo de lima que aporta un toque cítrico, jarabe de azúcar que equilibra los sabores y rodajas de pepino que añaden un sabor herbal y refrescante. Esta mezcla ligera y sofisticada es ideal para quienes disfrutan de cócteles con un perfil herbal y una frescura distintiva. Perfecto para cualquier ocasión, el Gimlet de Pepino ofrece una experiencia de sabor única y revitalizante. Su presentación en una copa de martini con hielo y una rodaja fina de pepino como adorno añade un toque de sofisticación visual que complementa su atractivo refrescante y distintivo.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/gimletPepino021.jpeg",
      "facts": {
        "alcoholContent": "8% ABV",
        "calorias": "140",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con una rodaja de pepino y una hoja de albahaca para un toque de frescura adicional!"
    },
    {
      "id": "oldFashionedClasico022",
      "name": "Old Fashioned Clásico",
      "shortDescription": "Tradicional, robusto y con un toque de bourbon y bíter.",
      "description": "El Old Fashioned es un cóctel que combina bourbon con azúcar, un toque de bíteres aromáticos y una pizca de agua. Esta bebida es perfecta para los amantes de los cócteles fuertes, destacando la riqueza y profundidad del bourbon con cada sorbo. Ideal para disfrutar en cualquier ocasión, el Old Fashioned es una elección clásica que nunca pasa de moda en el mundo de la mixología. Su presentación tradicional en un vaso bajo con hielo, una cáscara de naranja exprimida y una cereza marrasquino realza su carácter sofisticado y lo convierte en un deleite para los paladares más exigentes.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/oldFashionedClasico022.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "160",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con una cereza maraschino y una cáscara de naranja para un toque de elegancia!"
    },
    {
      "id": "martiniSeco023",
      "name": "Martini Seco",
      "shortDescription": "Elegante, seco y con un toque de gin y vermut seco.",
      "description": "El Martini Seco combina gin de alta calidad con vermut seco, creando una bebida elegante y equilibrada. Conocido por su simplicidad y refinamiento, el Martini Seco es perfecto para disfrutar como aperitivo antes de una cena. Su sabor fresco y suave hacen de este cóctel una elección favorita entre quienes aprecian la mixología clásica y la elegancia en cada sorbo. Su presentación en una copa de martini con hielo frío y una cáscara de limón exprimida como decoración añade un toque visual que complementa su atractivo y lo convierte en una experiencia sensorial completa.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/martiniSeco023.jpeg",
      "facts": {
        "alcoholContent": "10% ABV",
        "calorias": "140",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Sirve en una copa de martini enfriada y decora con una aceituna verde para un toque de estilo!"
    },
    {
      "id": "caipirinhaFresa024",
      "name": "Caipirinha de Fresa",
      "shortDescription": "Frutal, refrescante y con un toque de cachaça y fresas frescas.",
      "description": "La Caipirinha de Fresa es una variación del clásico brasileño. Elaborada con cachaça brasileña, fresas, azúcar y hielo que mantiene la bebida fresca, esta versión es perfecta para disfrutar en un día caluroso. Combina la frescura de la fruta con la intensidad del licor, ofreciendo una experiencia revitalizante que resalta la diversidad de la mixología tropical. Su presentación en un vaso bajo con hielo picado y una rodaja de fresa como adorno no solo mejora su atractivo visual, sino que también realza su sabor frutal y exótico, convirtiéndola en la opción ideal para cualquier ocasión veraniega.",
      "imageUrl": "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/caipirinhaFresa024.jpeg",
      "facts": {
        "alcoholContent": "8% ABV",
        "calorias": "130",
        "tiempoDePreparacion": "5 minutos",
      },
      "extraInfo": "¡Decora con rodajas de fresa y una ramita de menta para un toque de frescura!"
    },
  ];

// Función para obtener una bebida por su ID
export function getBebidaById(id) {
  return bebidas.find(bebida => bebida.id === id);
}

// Exportar el dataset por defecto
export default bebidas;