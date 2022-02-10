import { Wrapper } from "../../styled-components/header.styled";

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="Main">
          <div className="info">
            <div className="logo">
              <img src="../img/Vector 2.1.png" alt="Логотип"></img>
              <h2>пензгидромаш</h2>
            </div>
            <div className="path">
              <a>Главная</a>
              <strong></strong>
              <span></span>
              <a>Компания</a>
            </div>
            <h1>Компания</h1>
            <div className="plash"></div>
            <p>
              Основная сфера деятельности «ПензГидромаш» — <br /> создание
              систем для нефтяной, газовой, химической <br /> и нефтехимической
              сфер промышленности.
            </p>
          </div>
          <div className="tanksAndSmokeStacks"></div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
