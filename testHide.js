var userName = $(".user").text().trim();
const xmlString = `
<Config>
    <MainInformation>
        <Title>TRAVEL REQUEST</Title>
    </MainInformation>
    <Navigation>
        <Visible>Yes</Visible>
        <Roles>
            <Role name="SP_admin" class="administrator" />
            <Role name="developer peal" class="employee" />
        </Roles>
    </Navigation>
</Config>`;

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
const className = getClassByName(userName); // Opraveno
if (className !== null) {
    console.log("Class pro uživatele: " + className);
    if (className === 'administrator') {
        $('.edit').show();
    } else if (className === 'employee') {  // Opraveno
        $('.edit').hide();
    }
} else {
    console.log("Role nenalezena.");
}