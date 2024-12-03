const flashcards = [
    {
        term: "accordions",
        definition: "componente UI che ti permette di espandere e comprimere sezioni di una UI",
        url: "https://balsamiq.com/learn/ui-control-guidelines/accordions/",
        svg: "../img/accordion.png"
    },
    {
        term: "affordance",
        definition: "un elemento di una UI che permette all'utente di capire come interagire con esso",
        url: "https://www.youtube.com/watch?v=a6F0EYCUjcE"
    },
    {
        term: "animation",
        definition: "animazione; movimento / effetto grafico in una UI",
        url: ""
    },
    {
        term: "background",
        definition: "sfondo; esempio: un colore, un'immagine",
        url: ""
    },
    {
        term: "bold",
        definition: "grassetto",
        url: ""
    },
    {
        term: "breadcrumbs",
        definition: "briciole di pane; componente UI che ti indica dove sei e che ti permette di tornare indietro sui tuoi passi",
        url: "https://balsamiq.com/learn/ui-control-guidelines/breadcrumbs/",
        svg: "../img/breadcrumbs.svg"
    },
    {
        term: "cart",
        definition: "carrello; in un sito e-commerce, il carrello contiene la lista dei prodotti che l'utente ha selezionato per l'acquisto",
        url: ""
    },
    {
        term: "checkout",
        definition: "cassa / processo di pagamento; in un sito e-commerce, il checkout è il processo di pagamento",
        url: ""
    },
    {
        term: "controls",
        definition: "controlli; gli elementi interattivi di una UI",
        url: ""
    },
    {
        term: "CLI",
        definition: "command line interface, interfaccia a riga di comando; paradigma di interazione molto diverso da quello basato su interfaccia grafica (GUI)",
        url: "https://en.wikipedia.org/wiki/Command-line_interface"
    },
    {
        term: "CTA",
        definition: "call to action; invito all'azione; 'primary CTA' invito all'azione principale; 'secondary CTA' invito all'azione secondario. di solito è un bottone o un link",
        url: ""
    },
    {
        term: "component",
        definition: "sotto-parte di una UI. esempio: form di login",
        url: ""
    },
    {
        term: "consistency",
        definition: "coerenza visiva e funzionale; è una delle euristiche di usabilità",
        url: ""
    },
    {
        term: "cookies",
        definition: "piccoli file che un sito web salva sul tuo dispositivo con vari scopi",
        url: "https://it.wikipedia.org/wiki/Cookie"
    },
    {
        term: "device",
        definition: "dispositivo; per esempio: cellulare, citofono, notebook",
        url: ""
    },
    {
        term: "dialog",
        definition: "finestra che appare sopra una UI; esempio: il messaggio di accettazione dei cookies",
        url: "https://m3.material.io/components/dialogs/overview"
    },
    {
        term: "dropdown",
        definition: "componente UI che ti permette di selezionare un valore da una lista predefinita. sinonimi: menu a tendina, menu a discesa, select, combo box",
        url: "https://balsamiq.com/learn/ui-control-guidelines/dropdown-menus/"
    },
    {
        term: "empty state",
        definition: "stato vuoto; quando una componente UI non contiene elementi, lo stato (state) della UI è vuoto (empty). esempio: un carrello degli acquisti senza prodotti",
        url: "https://balsamiq.com/learn/ui-control-guidelines/empty-states/"
    },
    {
        term: "FAQ",
        definition: "domande frequenti; sezione di un sito web che contiene le domande più frequenti degli utenti con le rispettive risposte",
        url: ""
    },
    {
        term: "feedback",
        definition: "risposta; esempio: messaggio di errore dopo aver compilato il campo email",
        url: ""
    },
    {
        term: "flat design",
        definition: "grafica minimalista, senza effetti 3D, senza ombreggiature, senza texture, senza filtri, senza trasparenze, senza gradienti, senza effetti di luce, senza animazioni",
        url: "https://it.wikipedia.org/wiki/Flat_design"
    },
    {
        term: "fold",
        definition: "il bordo basso della finestra di visualizzazione di una UI, un'espressione ricorrente è 'above the fold', indica la parte di una UI che è visibile senza dover scrollare",
        url: "https://en.wikipedia.org/wiki/Above_the_fold"
    },
    {
        term: "font",
        definition: "il tipo di carattere usato in una UI",
        url: "https://fonts.google.com/"
    },
    {
        term: "form",
        definition: "componente grafico che permette di inserire dati",
        url: "https://it.wikipedia.org/wiki/Form"
    },
    {
        term: "framework",
        definition: "codice che è l'architettura logica di supporto per sviluppare un programma seguendo certe convenzioni. per esempio React o Angular o per Bootstrap",
        url: "https://it.wikipedia.org/wiki/Framework"
    },
    {
        term: "GUI",
        definition: "graphical user interface; interfaccia grafica utente",
        url: "https://it.wikipedia.org/wiki/Interfaccia_grafica"
    },
    {
        term: "hamburger menu",
        definition: "componente UI che permette di navigare tra diverse sezioni di una UI. nasce come soluzione al problema del poco spazio in UI mobile",
        url: "https://en.wikipedia.org/wiki/Hamburger_button"
    },
    {
        term: "happy talk",
        definition: "testo introduttivo, spesso inutile e che non aiuta l'utente a raggiungere il suo obiettivo",
        url: "https://blog.codinghorror.com/happy-talk-must-die/"
    },
    {
        term: "header",
        definition: "la parte superiore di una UI, se prendiamo il browser come esempio, la parte dove c'è l'indirizzo web e le funzioni di navigazione",
        url: "",
        svg: "../img/header.png"
    },
    {
        term: "high fidelity",
        definition: "alta fedeltà; inteso come 'vicino alla realizzazione grafica finale'; si intende di solito di prototipo o wireframe o sketch",
        url: "https://it.wikipedia.org/wiki/Wireframe_(web_design)"
    },
    {
        term: "interaction",
        definition: "interazione; descrive la conversazione uomo macchina attraverso la UI",
        url: ""
    },
    {
        term: "italic",
        definition: "corsivo",
        url: ""
    },
    {
        term: "IxD",
        definition: "interaction design; design dell'interazione",
        url: ""
    },
    {
        term: "input",
        definition: "un campo di input è un componente grafico che permette all'utente di inserire dati",
        url: "https://balsamiq.com/learn/ui-control-guidelines/text-input/"
    },
    {
        term: "keyboard",
        definition: "tastiera",
        url: ""
    },
    {
        term: "layer",
        definition: "strato; la grafica di una UI può essere pensata come una millefoglie: costruita uno strato sopra l'altro. in Figma, ogni elemento è un layer",
        url: "https://help.figma.com/hc/en-us/articles/360039831974-View-layers-and-pages-in-the-left-sidebar#layers"
    },
    {
        term: "layout",
        definition: "la disposizione dei componenti grafici all'interno di una UI: esempio: 'layout a due colonne' indica una disposizione con una colonna principale e una colonna secondaria",
        url: ""
    },
    {
        term: "low fidelity",
        definition: "bassa fedeltà; inteso come 'approssimativo, poco dettagliato rispetto alla realizzazione grafica finale'; si intende di solito di prototipo o wireframe o sketch",
        url: "https://it.wikipedia.org/wiki/Wireframe_(web_design)"
    },
    {
        term: "mode",
        definition: "modalità; una UI presenta un mode quando un controllo, compie due azioni diverse a seconda dello stato della UI",
        url: "https://en.wikipedia.org/wiki/Mode_(user_interface)"
    },
    {
        term: "mockup",
        definition: "mockup; immagine di una UI che non è ancora stata realizzata; serve per illustrare come sarà la grafica finale",
        url: "https://it.wikipedia.org/wiki/Mockup"
    },
    {
        term: "navigation",
        definition: "navigazione; il percorso che un utente segue per raggiungere un obiettivo all'interno di un sito web o di un'app",
        url: ""
    },
    {
        term: "on blur",
        definition: "si dice quando un elemento di una UI perde focus, per esempio quando si passa da un campo di input all'altro",
        url: ""
    },
    {
        term: "onboarding",
        definition: "processo che guida l'utente nell'uso di un'app o di un sito web la prima volta che lo usa",
        url: "https://www.useronboard.com/"
    },
    {
        term: "palette",
        definition: "abbreviazione di 'color palette': un insieme di colori",
        url: ""
    },
    {
        term: "pointer",
        definition: "nome del cursore del mouse quando assomiglia a una mano con l'indice puntato",
        url: "https://www.w3schools.com/cssref/pr_class_cursor.php"
    },
    {
        term: "popup",
        definition: "piccola finestra che appare sopra una UI",
        url: ""
    },
    {
        term: "sidebar",
        definition: "la colonna laterale di una UI, per esempio la lista dei file in un editor di testo",
        url: ""
    },
    {
        term: "site map",
        definition: "mappa del sito; un diagramma che rappresenta le pagine di un sito web e la relazione tra esse",
        url: "https://balsamiq.com/learn/ui-control-guidelines/site-maps/"
    },
    {
        term: "tabs",
        definition: "componente UI che permette di navigare tra diverse sezioni di un sito / app. analogo digitale delle linguette di uno schedario fisico",
        url: "https://balsamiq.com/learn/ui-control-guidelines/tabs/"
    },
    {
        term: "tagline",
        definition: "frase che descrive un'azienda o un prodotto, riassumendo in poche parole cosa lo caratterizza. sinonimi: payoff, claim",
        url: ""
    },
    {
        term: "terminal",
        definition: "terminale; programma che permette di eseguire comandi e programmi attraverso una linea di comando (prompt)",
        url: ""
    },
    {
        term: "tooltip",
        definition: "testo secondario di aiuto in piccola finestra che si apre di solito vicino a una label",
        url: "https://balsamiq.com/learn/ui-control-guidelines/tooltips-popovers/"
    },
    {
        term: "UI",
        definition: "user interface; interfaccia utente",
        url: ""
    },
    {
        term: "underline",
        definition: "sottolineato",
        url: ""
    },
    {
        term: "URL",
        definition: "indirizzo web; esempio: https://www.google.com",
        url: ""
    },
    {
        term: "user",
        definition: "utente",
        url: ""
    },
    {
        term: "user friendly",
        definition: "intuitivo, semplice da usare",
        url: ""
    },
    {
        term: "utilities",
        definition: "quella parte dell'header di un sito web che si trova di solito allineata a destra e comprende una serie di link a: accedi | contatti | cerca",
        url: ""
    },
    {
        term: "UX",
        definition: "user experience; esperienza dell'utente",
        url: ""
    },
    {
        term: "visual design",
        definition: "parte estetico di una UI; sinonimo: grafica",
        url: ""
    },
    {
        term: "visual hierarchy",
        definition: "gerarchia visiva; l'ordine del peso visivo dei componenti grafici",
        url: ""
    },
    {
        term: "viewport",
        definition: "la finestra di visualizzazione di una UI, per esempio 'view mobile' indica la finestra di visualizzazione di un dispositivo mobile",
        url: ""
    },
    {
        term: "wireframe",
        definition: "uno sketch di una UI caratterizzato da frames che catturano istanti nel tempo della UI, collegati da frecce che rappresentano gli eventi che modificano lo stato della UI",
        url: "https://balsamiq.com/learn/articles/what-are-wireframes/"
    }
];