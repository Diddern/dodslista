import React from "react";
import '../assets/css/App.css';
const Rulebook = () => (
    <div className="rulebook">
        <h2>Regelverk for R.I.P. Forecast</h2>
        <p><strong>Versjon 1.0 – Gjeldende for sesongen 2025</strong></p>

        <h3>§1 – Generelle bestemmelser</h3>
        <p>1.1. Dette regelverket regulerer spillernes deltakelse i "R.I.P. Forecast" og er bindende for alle deltakere.</p>
        <p>1.2. Formålet med spillet er å forutse hvilke kandidater som vil avgå ved døden i løpet av inneværende år, uten at noen av spillerne har påvirkning på utfallet.</p>

        <h3>§2 – Forbud mot påvirkning av utfallet</h3>
        <p>2.1. Ingen av spillerne kan på noen måte aktivt eller passivt bidra til å påvirke en kandidats død, verken direkte eller indirekte.</p>
        <p>2.2. Det er ikke tillatt å bruke en tredjepart til å påvirke kandidatens livssituasjon, helse eller øvrige forhold som kan føre til kandidatens død.</p>
        <p>2.3. Brudd på §2 vil resultere i umiddelbar diskvalifikasjon fra spillet, samt mulig ekskludering fra fremtidige runder.</p>

        <h3>§3 – Gevinst og oppgjør</h3>
        <p>3.1. Ved en kandidats dødsfall skal den spilleren som hadde kandidaten på sin liste motta en gevinst på <strong>100 NOK</strong> fra motspilleren.</p>
        <p>3.2. Gevinstbeløpet skal betales snarest mulig etter at motspilleren er gjort oppmerksom på dødsfallet, enten i form av en fysisk <strong>100-lapp</strong> eller via <strong>Vipps</strong>.</p>
        <p>3.3. Dersom vinneren krever en fysisk 100-lapp, skal dette skje innen rimelig tid. Ved uenighet tolkes "rimelig tid" som innen <strong>7 dager</strong> fra det tidspunktet motspilleren ble gjort oppmerksom på dødsfallet.</p>
        <p>3.4. Unnlatelse av betaling innen fristen kan resultere i utestengelse fra fremtidige runder.</p>

        <h3>§4 – Valg av kandidater</h3>
        <p>4.1. En kandidat må oppfylle følgende kriterier for å være gyldig på listen:</p>
            <ul>
                <li>a) Kandidaten må være en <strong>offentlig kjent person</strong>.</li>
                <li>b) offentlig kjent er definert av at dødsfall burde annonseres i riksdekkende medier.</li>
                <li>c) Kandidaten må ha en <strong>eksisterende Wikipedia-side</strong> ved tidspunktet for kandidatutvelgelse.
            </li>
        </ul>
        <p>4.2. Spillere kan <strong>ikke</strong> ha samme kandidat på sin liste.</p>
        <p>4.3. Dersom spillere ønsker samme kandidat, har spilleren som hadde kandidaten på sin liste året før <strong>førsterett</strong> til å velge vedkommende.</p>
        <p>4.4. Ved uenighet om valg av kandidat mellom to spillere skal dette avgjøres ved <strong>stein-saks-papir (best av tre)</strong>.</p>

        <h3>§5 – Listeoppdatering og neste års spill</h3>
        <p>5.1. Nye lister for det kommende året må være ferdigstilt innen <strong>31. desember kl. 23:59</strong>.</p>
        <p>5.2. Hvis en spiller ønsker å beholde en kandidat fra forrige års liste, har vedkommende <strong>førsterett</strong> til å velge denne kandidaten.</p>
        <p>5.3. Hvis en spiller ikke utøver sin førsterett, er kandidaten åpen for valg av andre spillere.</p>

        <h3>§6 – Tvisteløsning</h3>
        <p>6.1. Ved uenighet om tolkning av reglene skal partene forsøke å løse saken gjennom forhandling.</p>
        <p>6.2. Dersom partene ikke oppnår enighet, kan de velge en <strong>nøytral tredjepart</strong> som får fullmakt til å avgjøre tvisten.</p>
        <p>6.3. Dersom enighet ikke oppnås innen rimelig tid (7 dager), anses tredjepartens avgjørelse som endelig og bindende.</p>
    </div>
);

export default Rulebook;