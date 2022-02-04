import { Wrapper } from "../../styled-components/header.styled";

const Header = () => {
  return (
    <>
      <Wrapper>
        <div>
          <img src="../img/Vector 2.1.png" alt="Логотип"></img>
          <h2>пензгидромаш</h2>
          <h1>Компания</h1>
          <a>Главная</a>
          <strong></strong>
          <span></span>
          <a>Компания</a>
          <div className="splash"></div>
          <p>
            Основная сфера деятельности «ПензГидромаш» — <br /> создание систем
            для нефтяной, газовой, химической <br /> и нефтехимической сфер
            промышленности.
          </p>
        </div>
        <div className="tanksAndSmokeStacks"></div>
      </Wrapper>
    </>
  );
};

export default Header;
