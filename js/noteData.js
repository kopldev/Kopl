const notesAndRulings = [
    {
        title: 'Landskabsanalyse Hørsholm Kommune',
        file: 'https://kopl.dk/onewebmedia/notes/240040-Landskabsanalyse-H%C3%B8rsholm-Kommune/Landskabsanalyse%20H%C3%B8rsholm_Del%202_rettet_2025.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/240040-Landskabsanalyse-H%C3%B8rsholm-Kommune/landskabsanalyse-del-2.png',
        services: ['Landskabsanalyse', 'Kommuneplan']
    },
    {
        title: 'Landskabsanalyse Hørsholm Kommune',
        file: 'https://kopl.dk/onewebmedia/notes/240040-Landskabsanalyse-H%C3%B8rsholm-Kommune/Landskabsanalyse%20H%C3%B8rsholm_2025.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/240040-Landskabsanalyse-H%C3%B8rsholm-Kommune/Landskabsanalyse-del1.png',
        services: ['Landskabsanalyse', 'Kommuneplan']
    },
    {
        title: 'Lokalplan og Miljøvurdering for Feriecenter',
        file: 'https://kopl.dk/onewebmedia/notes/250023-Gerbredg%C3%A5rd/20250526%20Naturnotat%2C%20Gerbredg%C3%A5rd.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250023-Gerbredg%C3%A5rd/Naturnotat-gerbredg%C3%A5rd.png',
        services: ['Lokalplan', 'kommuneplantillæg', 'Kystnærhedszonen', 'regnvandshåndtering', 'Miljøvurdering', 'Miljøkonsekvensvurdering', 'Sommerhusloven', 'projektudvikling']
    },
    {
        title: 'Lokalplan og Miljøvurdering for Feriecenter',
        file: 'https://kopl.dk/onewebmedia/notes/250023-Gerbredg%C3%A5rd/Regler%20vedr.%20planloven%20og%20sommerhusloven.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250023-Gerbredg%C3%A5rd/regler-vedr.-planloven-og-sommerhusloven-billede.png',
        services: ['Lokalplan', 'kommuneplantillæg', 'Kystnærhedszonen', 'regnvandshåndtering', 'Miljøvurdering', 'Miljøkonsekvensvurdering', 'Sommerhusloven', 'projektudvikling']
    },
    {
        title: 'Lokalplan for nyt boligområde i Østbirk',
        file: 'https://kopl.dk/onewebmedia/notes/250014-Horsens/Regnvandsh%C3%A5ndteringsplan%20Monbjergvej%2C%20%C3%98stbirk%20v4.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250014-Horsens/Regnvandsh%C3%A5ndteringsplan-Monbjergvej-%C3%98stbirk-v4.png',
        services: ['Lokalplan', 'Bebyggelsesplan', 'Projektudvikling', 'Regnvandshåndtering', 'kommuneplantillæg']
    },
    {
        title: 'Boliger i Båring',
        file: 'https://kopl.dk/onewebmedia/notes/250004-B%C3%A5ring/Kortl%C3%A6gning%20af%20tr%C3%A6er%20ved%20B%C3%A5ring%20uden%20bilag.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250004-B%C3%A5ring/Kortl%C3%A6gning-af-tr%C3%A6er-ved-b%C3%A5ring.png',
        services: ['Naturregistrering og kortlægning', 'Vandhåndteringsplan']
    },
    {
        title: 'Boliger i Båring',
        file: 'https://kopl.dk/onewebmedia/notes/250004-B%C3%A5ring/Vandh%C3%A5ndteringsplan%20-%20Boliger%20i%20B%C3%A5ring%2008082025.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250004-B%C3%A5ring/Vandh%C3%A5ndteringsplan-for-boliger-i-b%C3%A5ring.png',
        services: ['Naturregistrering og kortlægning', 'Vandhåndteringsplan']
    },
    {
        title: 'Miljøvurdering af Hørsholm Kommuneplan',
        file: 'https://kopl.dk/onewebmedia/notes/250001-milj%C3%B8vurdering%20H%C3%B8rsholm-kp/Afgr%C3%A6nsningsnotat%20Potentialeomr%C3%A5de.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250001-milj%C3%B8vurdering%20H%C3%B8rsholm-kp/Afgr%C3%A6nsningsnotat-potientialeomr%C3%A5de.png',
        services: ['Afgrænsningsnotat', 'Miljøvurdering']
    },
    {
        title: 'Miljøvurdering af Hørsholm Kommuneplan',
        file: 'https://kopl.dk/onewebmedia/notes/250001-milj%C3%B8vurdering%20H%C3%B8rsholm-kp/Milj%C3%B8rapport%20-%20Gr%C3%B8n%20Zone%2027022025.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/250001-milj%C3%B8vurdering%20H%C3%B8rsholm-kp/Milj%C3%B8rapport-gr%C3%B8n-zone.png',
        services: ['Afgrænsningsnotat', 'Miljøvurdering']
    },
    {
        title: 'Miljøvurdering af energiparker',
        file: 'https://kopl.dk/onewebmedia/notes/240058-vejen/20250313%20Milj%C3%B8rapport%20-%20Kommuneplantill%C3%A6g%2043.pdf',
        image: 'https://kopl.dk/onewebmedia/notes/240058-vejen/milj%C3%B8rapport-kommuneplantill%C3%A6g.png',
        services: ['Planrådgivning', 'Afgrænsningsnotat', 'Miljøvurdering']
    },
    {
        title: 'Miljøvurdering af energiparker',
        file: 'https://kopl.dk/onewebmedia/notes/240058-vejen/20250602%20Sammenfattende%20redeg%C3%B8relse.pdff',
        image: 'https://kopl.dk/onewebmedia/notes/240058-vejen/Sammenfattende-redeg%C3%B8relse.png',
        services: ['Planrådgivning', 'Afgrænsningsnotat', 'Miljøvurdering']
    }
]