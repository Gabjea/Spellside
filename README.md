# Spellside

Spellside doreste sa fie o platforma decentralizata in care oamenii pot minta NFTs din 2 motive: o parte din banii investiti pe mintarea unui NFT va fi donata la catre una din asociatiile care ajuta nevoiasi, in urma unor voturi decentralizate la o perioada stabilita de timp. Al doilea motiv pentru a folosi platforma Spellside este pentru a participa la batali in urma carora NFT-urile tale vor evolua si vei avea acces la inclusiv mai multe beneficii.
Jocul se va vrea a fi un joc de strategie bazat pe puteri. In urma unei lupte castigate vei primi voturi pentru a putea vota ce asociatie vom ajuta in viitor.


[Dezvoltarea Platformei]
1.Blockchain
  -majoritatea timpului am stat sa dau research si pentru alegerea unei idei
  
  1.1.Autentificare Metamask
      -aceasta a mers foarte bine, datorita platformei Moralis facand ca si implementarea autentificarii sa fie destul de usoara
      https://moralis.io/
 
  1.2.Crearea si mintarea unui NFT
      -aceasta a fost ce mai grea parte, mai ales folosind contracte implementate cu Solidity
      -pentru a urca fisierele pe IPFS am folosit Pinata
      https://app.pinata.cloud/
  
2.Jocul propriu-zis
      -aici am avut cele mai mari probleme din cauza tehnologiilor folosite (Next.js) nu am putut face jocul multiplayer, nemergand nimic legat de WebSockets
      -ca si alternativa am incercat sa folostesc niste Live Sessions de la Moralis ( un trigger pe baza de date ), dar am fost mult prea restrictionat si incarcam foarte mult baza de date, doar incercat sa fac matchmaking-ul.
      
      
