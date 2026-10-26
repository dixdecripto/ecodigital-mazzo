/* =====================================================================
   1. Le 18 proposte di settembre 2026
   ===================================================================== */
const P_TUTTE = [
{id:"robot70",tema:"Lavoro",titolo:"Automazione e tutela dell'occupazione",
 claim:"Nelle imprese con oltre 50 dipendenti il rapporto tra lavoratori e sistemi automatizzati resta di almeno 70 a 30. Chi supera la soglia versa un contributo destinato alla riqualificazione professionale.",
 fatto:"A Taranto il Just Transition Fund ha messo <b>20 milioni di euro</b> nei corsi per i lavoratori in cassa integrazione, indotto compreso: 200 ore di formazione e 2.500 euro a fine percorso. Nel 2024 l'Europa occidentale ha toccato il record di <b>267 robot ogni 10.000 addetti</b> dell'industria, e l'Italia è tra i primi venti paesi al mondo (IFR, World Robotics 2025). Più robot in fabbrica possono voler dire lavoro migliore per tutti. Il contributo di chi supera il tetto porta corsi come questi in ogni regione, per chi deve imparare un mestiere nuovo.<br><span class=\"fonti\">Fonti: <a href=\"https://ifr.org/ifr-press-releases/robot-density-surges-in-europe-asia-and-americas\" target=\"_blank\" rel=\"noopener\">IFR, densità dei robot</a></span>",
 firme:742,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#E0A100",.76,.26,.13],terra:"#071710",oriz:.74,trama:"punti",
   figure:[["omino",.22,1,"#0B1F14"],["omino",.34,.95,"#0B1F14"],["omino",.46,1.02,"#0B1F14"],["robot",.66,1.05,"#E0A100"]]}},

{id:"dati30",tema:"Dati",titolo:"Dati ambientali pubblici entro 30 giorni",
 claim:"I dati su aria, acqua, rumore e traffico raccolti dai Comuni con risorse pubbliche sono pubblicati in formato aperto entro 30 giorni dalla rilevazione.",
 fatto:"Dal <b>9 giugno 2024</b> il regolamento europeo 2023/138 chiede agli enti pubblici di dare gratis i dati di elevato valore su meteo, ambiente e mobilità, scaricabili in blocco e via API, anche per le app e per usi commerciali. In Italia AgID ha pubblicato a dicembre 2023 una guida operativa per aiutare gli enti a farlo. Il passo successivo è un termine certo di 30 giorni per tutto quello che si misura in città con soldi pubblici.<br><span class=\"fonti\">Fonti: <a href=\"https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/12/22/open-data-online-guida-operativa-sui-dati-elevato-valore\" target=\"_blank\" rel=\"noopener\">AgID, dati di elevato valore</a></span>",
 firme:689,
 arte:{cielo:["#14405B","#08202F"],sole:null,terra:"#061722",oriz:.78,trama:"righe",
   figure:[["antenna",.28,1.1,"#0A2433"],["server",.58,1,"#0A2433"],["antenna",.8,.8,"#0A2433"]],flussi:"#4FA3D9"}},

{id:"etichettaia",tema:"Intelligenza artificiale",titolo:"Etichetta energetica per l'intelligenza artificiale",
 claim:"Ogni servizio di intelligenza artificiale dichiara il consumo energetico, l'origine dei dati di addestramento e il soggetto responsabile in caso di errore.",
 fatto:"Dal <b>10 ottobre 2025</b> l'Italia ha una legge sull'intelligenza artificiale, la numero 132, pubblicata in Gazzetta il 25 settembre. Ha 28 articoli e lavora insieme all'AI Act europeo, il regolamento 2024/1689, con la vigilanza affidata ad AgID e all'Agenzia per la cybersicurezza. Già oggi i professionisti devono dire al cliente quando usano l'IA. Un'etichetta chiara, come la classe energetica del frigorifero, porta la stessa trasparenza a ogni servizio e la fa capire a tutti.<br><span class=\"fonti\">Fonti: <a href=\"https://www.fiscal-focus.it/quotidiano/il-quotidiano/articoli-lavoro/intelligenza-artificiale-in-vigore-dal-10-ottobre-la-nuova-legge-delega,3,176600\" target=\"_blank\" rel=\"noopener\">Fiscal Focus, legge 132/2025</a></span>",
 firme:914,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#3FBE7E",.5,.36,.2],terra:"#071710",oriz:.8,trama:"punti",
   figure:[["schermo",.5,1.25,"#0B1F14"]],barre:"#3FBE7E"}},

{id:"mare3030",tema:"Mare",titolo:"Rete nazionale di aree marine protette",
 claim:"Tutela del 30% dei mari italiani entro il 2030, con regole chiare su ancoraggi, navigazione e pesca e gestione condivisa con i pescatori locali.",
 fatto:"Il <b>4 agosto 2026</b> il Parlamento ha approvato in via definitiva l'area marina protetta di Capri, dopo il sì del Senato del 28 gennaio. La legge stanzia 300.000 euro l'anno dal 2027 e separa Capri da Punta Campanella, così il Golfo di Napoli diventa una rete di aree protette. A Torre Guaceto, vicino Brindisi, riserva dal 1991, i pescatori locali gestiscono la pesca insieme all'area protetta: secondo la Commissione europea lì il pescato è circa <b>il doppio</b> di quello fuori.<br><span class=\"fonti\">Fonti: <a href=\"https://www.senato.it/leggi-e-documenti/disegni-di-legge/scheda-ddl?did=59855\" target=\"_blank\" rel=\"noopener\">Senato, AMP Capri</a> · <a href=\"https://oceans-and-fisheries.ec.europa.eu/projects/co-management-marine-reserve_en\" target=\"_blank\" rel=\"noopener\">Commissione europea, Torre Guaceto</a></span>",
 firme:1021,
 arte:{cielo:["#1D5C8A","#0A2433"],sole:["#E0A100",.24,.28,.11],terra:"#062031",oriz:.58,onde:"#2E7FB5",
   figure:[["scoglio",.74,1.2,"#07202F"],["barca",.4,.7,"#0C3049"]]}},

{id:"ricambi10",tema:"Imprese",titolo:"Garanzia decennale di riparabilità",
 claim:"Pezzi di ricambio e aggiornamenti software garantiti per dieci anni su tutti i prodotti elettronici venduti in Italia.",
 fatto:"Dal <b>20 giugno 2025</b> in Europa i nuovi smartphone e tablet devono avere i ricambi principali per <b>sette anni</b> dopo la fine delle vendite, consegnati in 5-10 giorni lavorativi, e aggiornamenti del sistema per almeno cinque anni. La batteria deve reggere 800 ricariche tenendo l'80% della carica, e in scatola c'è un'etichetta con la classe di riparabilità da A a E. Dieci anni per tutta l'elettronica è il passo successivo, e dà lavoro a chi ripara sotto casa.<br><span class=\"fonti\">Fonti: <a href=\"https://single-market-economy.ec.europa.eu/news/new-eu-rules-durable-energy-efficient-and-repairable-smartphones-and-tablets-start-applying-2025-06-20_en\" target=\"_blank\" rel=\"noopener\">Commissione europea, regole smartphone</a></span>",
 firme:867,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#E0A100",.7,.3,.1],terra:"#071710",oriz:.82,trama:"punti",
   figure:[["telefono",.38,1.15,"#0B1F14"],["ingranaggio",.64,.9,"#E0A100"]]}},

{id:"calore",tema:"Energia",titolo:"Recupero del calore dei data center",
 claim:"I nuovi data center immettono il calore di scarto nella rete di teleriscaldamento del territorio che li ospita.",
 fatto:"A Milano si fa già. Con l'accordo tra A2A ed Equinix annunciato il <b>2 luglio 2026</b> il calore dei server del campus di Settimo Milanese entra nel teleriscaldamento della città. Un nuovo centro energetico con quattro grandi pompe di calore da 72 MW in tutto e due accumuli da 6.000 metri cubi recupera circa <b>225 GWh l'anno</b>, il 20% in più del calore che A2A distribuisce a Milano. Lo stesso schema può funzionare in ogni comune che ospita un data center.<br><span class=\"fonti\">Fonti: <a href=\"https://www.01net.it/equinix-a2a-calore-data-center-milano/\" target=\"_blank\" rel=\"noopener\">01net, A2A ed Equinix</a></span>",
 firme:598,
 arte:{cielo:["#2A2118","#0F1A14"],sole:["#C8443A",.72,.3,.14],terra:"#0A1710",oriz:.76,trama:"punti",
   figure:[["server",.28,1.1,"#0A1912"],["casa",.58,.85,"#0A1912"],["casa",.74,.75,"#0A1912"]],calore:"#C8443A"}},

{id:"scuolaora",tema:"Giovani",titolo:"Educazione ecodigitale nelle scuole",
 claim:"Un'ora settimanale di educazione civica dedicata alla transizione ecologica e digitale, con un progetto sul territorio in ogni scuola secondaria.",
 fatto:"La legge 92 del 2019 dà all'educazione civica <b>33 ore l'anno</b>, cioè un'ora a settimana, in ogni ordine di scuola. Dentro ci sono già sviluppo sostenibile e cittadinanza digitale, e il voto entra in pagella. Le ore si dividono tra i docenti della classe, quindi un progetto fatto insieme nel proprio comune ci sta tutto: misurare l'aria davanti alla scuola, mappare le fontanelle, mettere online i dati.<br><span class=\"fonti\">Fonti: <a href=\"https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2019-08-20;92\" target=\"_blank\" rel=\"noopener\">Legge 92/2019</a></span>",
 firme:803,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#3FBE7E",.3,.3,.16],terra:"#071710",oriz:.78,trama:"punti",
   figure:[["omino",.34,.8,"#0B1F14"],["omino",.44,.75,"#0B1F14"],["schermo",.66,.9,"#0B1F14"],["germoglio",.2,.7,"#3FBE7E"]]}},

{id:"paesaggio",tema:"Paesaggio",titolo:"Tutela di terrazzamenti e muretti a secco",
 claim:"Incentivi a chi mantiene terrazzamenti e muretti a secco, presidio contro frane e dissesto idrogeologico, e riconoscimento professionale per chi li ripara.",
 fatto:"L'<b>arte dei muretti a secco</b> è patrimonio immateriale dell'umanità <b>UNESCO dal 2018</b>, con una candidatura comune di otto paesi europei tra cui l'Italia. Il <b>26 agosto 2025</b> la FAO ha riconosciuto i terrazzamenti della Costiera amalfitana patrimonio agricolo di importanza mondiale (GIAHS): i muri a secco reggono limoneti, uliveti e vigneti su versanti molto ripidi. Dove i terrazzamenti vengono abbandonati i muri cedono, l'acqua piovana scorre senza freno e il versante diventa più esposto a frane. Pagare la manutenzione costa meno che riparare i danni dopo.<br><span class=\"fonti\">Fonti: <a href=\"https://ich.unesco.org/en/RL/art-of-dry-stone-walling-knowledge-and-techniques-01393\" target=\"_blank\" rel=\"noopener\">UNESCO, arte dei muretti a secco</a> · <a href=\"https://www.agi.it/cronaca/news/2025-08-26/costiera-amalfitana-proclamata-patrimonio-agricolo-mondiale-32887465/\" target=\"_blank\" rel=\"noopener\">AGI, Costiera patrimonio FAO</a></span>",
 firme:655,
 arte:{cielo:["#E0A100","#7A3F18"],sole:["#FFD780",.7,.22,.12],terra:"#20180E",oriz:.52,
   figure:[["terrazze",.5,1.3,"#241B0F"],["omino",.3,.55,"#150F08"]]}},

{id:"algoritmo",tema:"Istituzioni",titolo:"Algoritmi pubblici trasparenti e verificabili",
 claim:"Codice e criteri pubblici per gli algoritmi che la pubblica amministrazione usa per appalti, contributi, graduatorie e controlli, con verifica indipendente e motivazione comprensibile per ogni cittadino.",
 fatto:"Nel 2019 il <b>Consiglio di Stato</b>, con le sentenze <b>2270</b> e <b>8472</b>, ha stabilito che l'algoritmo usato da un'amministrazione deve essere conoscibile, che la decisione non può essere affidata solo alla macchina e che non deve discriminare. Il codice dei contratti pubblici, d.lgs. 36/2023, all'<b>articolo 30</b> chiede alle stazioni appaltanti di assicurare la disponibilità del codice sorgente e un controllo umano sulle decisioni automatizzate. L'AI Act europeo, regolamento 2024/1689, classifica ad alto rischio i sistemi che decidono l'accesso a prestazioni e servizi pubblici. Criteri pubblici e verificati da un soggetto indipendente riducono lo spazio per favoritismi e corruzione, e permettono a imprese e cittadini di sapere perché sono stati scelti o esclusi.<br><span class=\"fonti\">Fonti: <a href=\"https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-03-31;36~art30\" target=\"_blank\" rel=\"noopener\">D.lgs. 36/2023, art. 30</a> · <a href=\"https://www.orizzontescuola.it/mobilita-consiglio-di-stato-anief-respinge-appello-algoritmo-2016-vincono-i-docenti/\" target=\"_blank\" rel=\"noopener\">Orizzonte Scuola, sentenze 2019</a> · <a href=\"https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R1689\" target=\"_blank\" rel=\"noopener\">AI Act, reg. 2024/1689</a></span>",
 firme:776,
 arte:{cielo:["#14405B","#08202F"],sole:null,terra:"#061722",oriz:.8,trama:"righe",
   figure:[["bilancia",.5,1.2,"#0A2433"]],flussi:"#4FA3D9"}},

{id:"telefonovecchio",tema:"Comuni",titolo:"Servizi pubblici digitali accessibili a tutti",
 claim:"Ogni servizio pubblico online viene collaudato su dispositivi datati e connessioni lente prima della messa in rete.",
 fatto:"Tra i 65 e i 74 anni solo il <b>19,3%</b>, meno di una persona su cinque, ha competenze digitali almeno di base (Istat, Cittadini e ICT 2023). Nella fascia tra 16 e 74 anni la quota sale al 45,7%. Un servizio semplice, leggero e provato su un telefono vecchio include anche le persone anziane e rende la vita più facile a tutti.<br><span class=\"fonti\">Fonti: <a href=\"https://www.istat.it/it/files/2023/12/Cittadini-e-ICT-2023.pdf\" target=\"_blank\" rel=\"noopener\">Istat, Cittadini e ICT 2023</a></span>",
 firme:712,
 arte:{cielo:["#1D5C8A","#0A2433"],sole:["#E0A100",.74,.24,.1],terra:"#062031",oriz:.8,trama:"punti",
   figure:[["telefono",.42,1.2,"#07202F"],["omino",.68,.85,"#07202F"]]}},

{id:"intergruppi",tema:"Istituzioni",titolo:"Intergruppi EcoDigital nei Consigli regionali",
 claim:"Un intergruppo EcoDigital trasversale in ogni Consiglio regionale, sul modello dell'Assemblea Regionale Siciliana.",
 fatto:"All'Assemblea Regionale Siciliana l'intergruppo è nato nel <b>settembre 2024</b>, annunciato dal presidente Gaetano Galvagno come il primo in Italia. Riunisce 13 deputati di quasi tutti i gruppi, da M5S e PD a Fratelli d'Italia, Forza Italia, Lega e Mpa, con la presidenza di Jose Marano. Il primo tema scelto è stato la siccità, e una legge regionale sostenuta dall'intergruppo ha creato un fondo per la formazione EcoDigital. Ora anche la Campania segue lo stesso modello.<br><span class=\"fonti\">Fonti: <a href=\"https://www.blogsicilia.it/sicilia-by-italpress/costituito-intergruppo-ecodigital-allars-jose-marano-presidente/1053915/\" target=\"_blank\" rel=\"noopener\">Italpress, intergruppo all'ARS</a></span>",
 firme:534,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#F2F7F0",.5,.3,.14],terra:"#071710",oriz:.84,
   figure:[["assemblea",.5,1.15,"#0B1F14"]]}},

{id:"pcriusati",tema:"Comuni",titolo:"Riuso solidale dei computer pubblici",
 claim:"I computer dismessi da uffici pubblici e scuole vengono ricondizionati e assegnati a studenti e famiglie che ne sono privi.",
 fatto:"L'8 marzo 2019 l'<b>Agenzia delle Entrate</b> ha messo a disposizione oltre 10mila computer dismessi ma funzionanti, tra fissi, portatili e server, per scuole, enti pubblici e associazioni non profit, con la precedenza alle scuole. Lo faceva già da circa dieci anni, invece di rottamarli. Se lo fanno tutti gli uffici, ogni anno migliaia di ragazzi hanno un computer in più per studiare.<br><span class=\"fonti\">Fonti: <a href=\"https://www.corrierecomunicazioni.it/digital-economy/il-fisco-spinge-sul-tech-riciclo-in-regalo-alle-scuole-10mila-computer-usati\" target=\"_blank\" rel=\"noopener\">CorCom, PC dell'Agenzia alle scuole</a></span>",
 firme:621,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#3FBE7E",.72,.28,.12],terra:"#071710",oriz:.8,trama:"punti",
   figure:[["schermo",.3,.9,"#0B1F14"],["schermo",.5,.8,"#0B1F14"],["ingranaggio",.72,.8,"#3FBE7E"]]}},

{id:"bilancio",tema:"Imprese",titolo:"Bilancio di sostenibilità leggibile",
 claim:"Le imprese pubblicano consumi, emissioni, filiera e durata dei prodotti in una scheda sintetica, standard e comprensibile a tutti.",
 fatto:"La direttiva europea <b>CSRD</b>, 2022/2464, recepita in Italia con il <b>decreto legislativo 125 del 2024</b>, chiede alle grandi imprese un rendiconto di sostenibilità secondo standard comuni europei (ESRS). Sono documenti lunghi e tecnici, che pochi cittadini leggono. Una scheda sintetica e uguale per tutti, con consumi, emissioni, filiera e durata dei prodotti, rende confrontabili le imprese. A <b>Ecomondo</b>, a Rimini dal 3 al 6 novembre 2026, con oltre 1.800 espositori, la rete EcoDigital raccoglie gli esempi di chi già lo fa.<br><span class=\"fonti\">Fonti: <a href=\"https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-09-06;125\" target=\"_blank\" rel=\"noopener\">D.lgs. 125/2024</a> · <a href=\"https://westmed-initiative.ec.europa.eu/events/ecomondo-3-6-november-2026-rimini-italy/\" target=\"_blank\" rel=\"noopener\">Ecomondo 2026</a></span>",
 firme:487,
 arte:{cielo:["#1B4332","#0A2016"],sole:null,terra:"#071710",oriz:.84,trama:"righe",
   figure:[["foglio",.5,1.2,"#F2F7F0"]],barre:"#3FBE7E"}},

{id:"tecnicocivico",tema:"Comuni",titolo:"Un tecnico digitale per i piccoli Comuni",
 claim:"Un responsabile dei servizi digitali condiviso tra i Comuni sotto i 5.000 abitanti, per servizi online, dati aperti e bandi.",
 fatto:"I comuni sotto i 5.000 abitanti sono <b>5.519</b>, sette comuni italiani su dieci (dati Istat al 1° gennaio 2026). Il Piemonte ne ha più di tutti, 1.045, seguito dalla Lombardia con 1.027. Spesso hanno pochi dipendenti e nessun esperto di digitale. Una persona ogni cinque comuni basta a tenere aperti i servizi online, pubblicare i dati e preparare i bandi.<br><span class=\"fonti\">Fonti: <a href=\"https://www.tuttitalia.it/comuni-minori-5000-abitanti/\" target=\"_blank\" rel=\"noopener\">Tuttitalia su dati Istat</a> · <a href=\"https://www.fondazioneifel.it/images/PiccoliComuni_marzo24.pdf\" target=\"_blank\" rel=\"noopener\">IFEL, piccoli comuni</a></span>",
 firme:445,
 arte:{cielo:["#14405B","#08202F"],sole:["#E0A100",.24,.26,.1],terra:"#061722",oriz:.78,trama:"punti",
   figure:[["casa",.24,.7,"#07202F"],["casa",.4,.62,"#07202F"],["antenna",.6,1,"#07202F"],["casa",.8,.66,"#07202F"]],flussi:"#4FA3D9"}},

{id:"suolozero",tema:"Paesaggio",titolo:"Priorità alla rigenerazione urbana",
 claim:"Stop al nuovo consumo di suolo nei Comuni che hanno ancora edifici e aree dismesse da recuperare.",
 fatto:"Nel 2024 in Italia quasi <b>84 chilometri quadrati</b> sono finiti sotto nuove superfici artificiali, il 16% in più dell'anno prima: circa <b>23 ettari al giorno</b> (ISPRA e SNPA, rapporto 2025). Il consumo netto, oltre 78 km², è il più alto degli ultimi dieci anni. Un capannone vuoto ha già strada, luce e fogna. Rimetterlo in uso salva il campo accanto.<br><span class=\"fonti\">Fonti: <a href=\"https://www.snpambiente.it/wp-content/uploads/2025/10/sintesi-consumo-di-suolo-2025.pdf\" target=\"_blank\" rel=\"noopener\">SNPA, consumo di suolo 2025</a></span>",
 firme:709,
 arte:{cielo:["#E0A100","#6B4A18"],sole:["#FFD780",.26,.24,.12],terra:"#1B1710",oriz:.7,
   figure:[["capannone",.38,1,"#241B0F"],["albero",.66,.9,"#2A2211"],["germoglio",.82,.6,"#3FBE7E"]]}},

{id:"trenoaereo",tema:"Trasporti",titolo:"Gratuità Intercity per giovani e over 65",
 claim:"Viaggio gratuito sui treni Intercity per i cittadini sotto i 30 anni e sopra i 65.",
 fatto:"In Spagna da settembre 2022 a giugno 2025 i treni Cercanías e Media Distancia sono stati gratis per chi li usava spesso: Renfe ha emesso oltre <b>21 milioni di abbonamenti</b> gratuiti. Oggi l'abbonamento unico costa 20 euro al mese, e 10 per i giovani. In Estonia dal 1° luglio 2018 gli autobus regionali sono gratis in 11 contee su 15, e dopo un anno e mezzo i viaggi erano cresciuti di circa il 15%.<br><span class=\"fonti\">Fonti: <a href=\"https://forbes.es/economia/760898/renfe-supera-los-21-millones-de-abonos-gratuitos-desde-2022-tras-ponerle-fin-el-30-de-junio/\" target=\"_blank\" rel=\"noopener\">Forbes España, abbonamenti Renfe</a> · <a href=\"https://www.baltictimes.com/estonia__free_public_transport_to_enter_into_force_in_11_counties_from_july_1/\" target=\"_blank\" rel=\"noopener\">Baltic Times, Estonia</a></span>",
 firme:958,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#E0A100",.78,.24,.11],terra:"#071710",oriz:.76,trama:"righe",
   figure:[["treno",.42,1.15,"#0B1F14"],["albero",.82,.7,"#0B1F14"]]}},

{id:"startupgare",tema:"Giovani",titolo:"Quota riservata alle startup negli appalti",
 claim:"Una parte delle gare pubbliche su ambiente e digitale è riservata a startup innovative e piccole imprese.",
 fatto:"Il codice degli appalti, decreto legislativo 36 del 2023, chiede già di dividere le gare in lotti per far partecipare le piccole e medie imprese. Una quota riservata nelle gare su ambiente e digitale fa lo stesso passo per le startup. Al Forum EcoDigital del <b>22 luglio 2026</b>, al Palazzo delle Esposizioni di Roma, le startup hanno avuto uno spazio tutto loro, curato da Anselmo Pellizzi. Le startup con soluzioni pertinenti possono scrivere a info@ecodigital.it.<br><span class=\"fonti\">Fonti: <a href=\"https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-03-31;36\" target=\"_blank\" rel=\"noopener\">D.lgs. 36/2023</a></span>",
 firme:502,
 arte:{cielo:["#1B4332","#0A2016"],sole:["#3FBE7E",.68,.3,.17],terra:"#071710",oriz:.8,trama:"punti",
   figure:[["germoglio",.3,1.1,"#3FBE7E"],["omino",.56,.85,"#0B1F14"],["omino",.68,.8,"#0B1F14"]]}},

{id:"acquaperdite",tema:"Acqua",titolo:"Piano nazionale contro le perdite idriche",
 claim:"Sensori sulle reti degli acquedotti e pubblicazione annuale, Comune per Comune, dell'acqua immessa e di quella effettivamente erogata.",
 fatto:"In Italia si perde il <b>42,4%</b> dell'acqua che entra nelle reti, 3,4 miliardi di metri cubi nel 2022: 157 litri al giorno per ogni abitante (Istat). Basterebbe per 43 milioni di persone per un anno intero. Le differenze sono grandi: l'Emilia-Romagna perde il 29,7%, la Basilicata il 65,5%. Sensori e dati pubblici aiutano a trovare le perdite e a vedere chi migliora.<br><span class=\"fonti\">Fonti: <a href=\"https://www.istat.it/comunicato-stampa/le-statistiche-dellistat-sullacqua-anni-2020-2022/\" target=\"_blank\" rel=\"noopener\">Istat, statistiche sull'acqua 2020-2022</a></span>",
 firme:664,
 arte:{cielo:["#1B4332","#0A2016"],sole:null,terra:"#071710",oriz:.84,
   figure:[["bersaglio",.5,1.2,"#3FBE7E"]],barre:"#F2F7F0"}}
];

/* Napoli 26/10: le 10 più solide più il tetto ai robot (scelta di Dix) */
const DIECI=["robot70","dati30","etichettaia","mare3030","scuolaora","paesaggio","algoritmo","telefonovecchio","pcriusati","tecnicocivico","acquaperdite"];
const P = DIECI.map(id=>P_TUTTE.find(x=>x.id===id));

const ESEMPI_PROPOSTE = [
 {testo:"Ogni scuola pubblica pubblica sul sito quanta energia consuma, mese per mese, e i ragazzi ci fanno un progetto.",chi:"Serena D., Bari",esempio:true},
 {testo:"Wi fi pubblico vero nelle aree interne, con un tecnico pagato dall'unione dei comuni che lo tiene acceso.",chi:"Nicola P., Potenza",esempio:true},
 {testo:"Le comunità energetiche rinnovabili aperte in ogni comune sopra i 3.000 abitanti, con lo sportello in municipio.",chi:"Anna M., Quartu Sant'Elena",esempio:true},
 {testo:"Chi ripara elettrodomestici e biciclette paga meno tasse locali, come i negozi storici.",chi:"Giuseppe L., Catania",esempio:true}
];
