import styled from '@emotion/styled';

const Header = styled.header`
display: flex;
flex-direction: column;
align-items: center;`

const Banner = styled.div`
color: antiquewhite;
background-color: grey;
font-size: 75px;
font-family: 'DM Serif Display', serif;
@media screen and (min-width: 485px) {
  font-size: 100px;
}
@media screen and (min-width: 641px) {
  font-size: 120px;
}
@media screen and (min-width: 765px) {
  font-size: 140px;
}
@media screen and (min-width: 891px) {
  font-size: 160px;
}
@media screen and (min-width: 1016px) {
  font-size: 180px;
}
@media screen and (min-width: 1140px) {
  font-size: 200px;
}
@media screen and (min-width: 1266px) {
  font-size: 220px;
}
@media screen and (min-width: 1391px) {
  font-size: 240px;
}
@media screen and (min-width: 1516px) {
  font-size: 260px;
}
@media screen and (min-width: 1641px) {
  font-size: 280px;
}
@media screen and (min-width: 1766px) {
  font-size: 300px;
}
@media screen and (min-width: 1891px) {
  font-size: 320px;
}
@media screen and (min-width: 2016px) {
  font-size: 340px;
}
@media screen and (min-width: 2141px) {
  font-size: 360px;
}
@media screen and (min-width: 2266px) {
  font-size: 380px;
}
@media screen and (min-width: 2400px) {
  font-size: 450px;
}
`

function App() {
  return (
    <div>
      <Header>
        
        <Banner>Jake Krauskopf</Banner>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Header>
    </div>
  );
}

export default App;
