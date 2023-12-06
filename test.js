var userName = $(".user").text().trim();

// URL k XML souboru
const xmlUrl = 'test.xml';

// Načítání XML z URL
fetch(xmlUrl)
    .then(response => response.text())
    .then(xmlString => {
        // Vytvoření XML objektu
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");

        // Získání hodnoty class podle parametru name
        function getClassByName(userName) {
            const roles = xmlDoc.querySelectorAll('Role[name="' + userName + '"]');
            if (roles.length > 0) {
                return roles[0].getAttribute("class");
            } else {
                return null; // Role s daným jménem nebyla nalezena
            }
        }

        // Příklad použití
        const className = getClassByName(userName);
        if (className !== null) {
            console.log("Class pro uživatele: " + className);
            if (className === 'administrator') {
                $('.edit').show();
            } else if (className === 'employee') {
                $('.edit').hide();
            }
        } else {
            console.log("Role nenalezena.");
        }
    })
    .catch(error => {
        console.error('Chyba při načítání XML z URL:', error);
    });