
import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from "../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
  <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <Title>MY BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping  Bag (4)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                <ProductDetail>
                    <Image src='data:image/jpeg;base64,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'/>
                <Details>
                    <ProductName><b>Product:</b> XOXOX</ProductName>
                    <ProductId><b>ID:</b>526479</ProductId>
                    <ProductColor color='black'/>
                    <ProductSize><b>Size:</b> 38</ProductSize>
                </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                <ProductDetail>
                    <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUYGRgaGh4aHBoZGhgZHB8aHBwaHhoaHRocIS4lHB4rIxwYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSw0NDQ0NDQ0NDQ0NDQ0NDQ0PTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQsAvQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAD0QAAEDAgMGAwcDAwIGAwAAAAEAAhEDIQQSMQVBUWFxgSKRoQYTMrHB0fBCUmJy4fEUMwcVI4KSolPC0v/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACURAAICAgMAAgICAwAAAAAAAAABAhEDIRIxQSJRBGFxsRNCof/aAAwDAQACEQMRAD8A9IWLFtAJixYtLGNrFolcrWY6JUGIxTWCXEAKHH4ttNuYnpzKqO0doOcMxcJd8IO4fuj5BQyZa0uysMXLbGO0/aljJAMcJ16wFTdo+1pc6zz5j5Qg9pbRaJY1oJOrzBc6eJOgSU0cxvMm1sp+RU0nLcizqOojat7R1HWbB4/k/VFYDblX4iT238rFRDZlOg0F5EkTBIHnbTz+qBfj5IioAJ+FjI7TqR3W4xfSByfpc8L7VvbHjBB3OiR6yrRsv2gp1fCSGu6yD0O7uvJG7RBMPa17TvAAPmPqCpadXwl1J7reIbnMcPp3Ou42Txco+iuMZHtoeuwVSvZX2jFZjcxh4EHqPneVb6VSRKtGVkZR4k6xcZl0HJhTaxZKxYxixYsWMYtLa0sYxbWlpzoWMblaJQVfF6xu3pJW20AYaS48vooyzKJWOJssrnLmpVAEn8CS4faLyLsf3al3tBtkMpuEEucMoaNSY0SvNroKxOxbtnaorVYaSWtneA2Br14cFUNrbRzPPiknhaBuF1mJrvGZkjO+C8i4A3MHIfVANwpgk3J3pIrdss3SpA7DJ1uSBOuvBN8BUFJj8Q4S6clMH90S53DwiO5C5wGziADHieQ1k2uTrO4c0ftHZxqvp0GA5KbYAH6nOJJcf2yPFf8AcAnbTJ00VyvWfUcXOl7jujMBPGdT2RdHYtdzZFMvB3AWHdtgr/s72bo4ZmZ7Q9+t/hHXilm1vaItkMyQLeE6eWiR5H1FDLHe2VKpsaswf7bwNNaY9C4FCM97ReDDmk6ZhlniBNnDldOD7Q1D8WhPXTXn2Wv9e1wggAaHeyeGTTfqAE3J+oHGPjB8Bisj/eU/CQfGy8DmAd3Lddekez23w+xPO55afLyXmlWi3MHMs79pMh4/id5/iex3InZeKLH8iJH27Ip1tAcb0z2anigd4PS6KY+eBXmmF2r4jabnjMzuIVmwGMLtHX4Ek34SPlCeM7JyhRZ10Eso4w6H8/O6OZVlUTEomWLQK2iAwrSxYsYxBbRfDQOJj0RiX7VbZn9XzSTfxY0e0Jds1nANpt+JxA6kpls7Z7KLBMF5+Jx48kn2niGMqio4/BJHWLfdBNx1fEGR4GcTckchuHl3XIpqLbq3/SOpwckldL3+Sy4zabGCJBKqu2HZ5qOIAAMceqNZhmsI/U87ze/TcluMaX1Q39IGZ08BoO5gpXJyexoxUehA/AkNktMuPcorZuzA4kuHhGvC24fn0T0YI1Dcxx5Dh1K62ji6eHZDfiIgQAYH7oNud1lJvQaQtezK+QJqOGRg3Ma62Y7g4jQfdW7ZuzmUGZzwFzqeH5yCq3sxhxVrBxE3LpLsxMamPS/E9rF7ZY406UN+LL/7OgD5hM9IRq5UUL2o24+tVcxp8DSQeE7wOPXeqvlcXadym5wBAl2g+Z+ZQdbDOI+X176KsaSNJMgruZlgSZ1dYXbwF+KiZUG/MdN43dijKWznEaIkbHdEwm5JCqLYvp4gRlg8Rca9gERUqlxa8a7+vHv91I3Z5B0nuEfh8KW6tjrH0SuSCoshwOJe1xJa4ib6wrBhKkgFgLTwykD03c1HhmMZcsDuUMt6Zl2/aLP0gDiPrrdK3ZkmWTAbRcRlqC/X66909wdcEZSeh+68/ZiA/Qid0WM/nVNdm7SexwDz3011uNJTRnT2JPHfRe2OspQUJh3y0IhpXQmc5ItLaxExylu13eEcjPkCmBeqz7UYwtYYu5xygW/OahlklErjjcis1nitUJ/Q0xfS2p59N6c0AcoJOXgOX7jzS7BsDPDFm77a6n1lar43M7Xf8t1tAuQ63sbYQS8u5GOQAt6wg8IyS5x3mP8AtF4+S5weJOdw3BpHDcJvyU1WsKdLMbWPa9u6AaI8ftFtNsDqfufsqkWurOzO8RkkB1huu7iACOqzE4rOczrMB05XtPE38inOwcK6oM7g4MmYJtMWDREQqJcVYGkPvZPCimHOmSQBMXgX8pUPtS4PxDGu+Frc57GG/fsjGVclhxA8zf0CrfthinCs2P1Mv2d/dCL5aAtSsXbQxAc7I0WHzUmEwBduXWytnlxkhWrDYEAaKiQWxPR2XyRDdnck+Zh137lbiDkVx2zxwHkoK2HAGgB/PJWOrSSzF0bJWqCnZXMQ4AQRblqOcfg+aXVanihxF9Hbj+efVNcbTsktRv6Dv0TRZpIla+Dfz+/3CZUMSfhdpx3pHReR4HajQ8W/2RuGfu8p+XRCSFTPQfZ7aDsuUnMG6HW2nX8CszHyBwK812Lisj9fzgeIK9AwTw5oLdDfkr4pWqOfLGnYe0rpRtXasRF+LxQFlT9tVC8yTp8Itu1P5wT2thZaXumNYlV3aDm5QHCxMiNWxo4d7Lz5uTeztxxS6Fjq7hAB4mZnfAsOnyWMBzC5vyvHe61SIkEFxAvqMvG1tNd6c4SuMslzQSOIbPqXFKVOsHQLQXPsLQ3fJvdI9u4ovIZuHxHrcm9gYIud5CdVasMJmbk9enl6oDD7Oc+HuGt4PHQTygBZNLYKAMHslriH1fhBBy3g8BB3cvPerbh2uc0ZW5WjfoOg5obCimwy97XOG7UDtvPOUbV2uw2DXOPDd5BZy5ApgGJqBpB3Tbmd56bkHtDCe9ewx8M/P+y7fRqVqmdwytkQ3kE/wGE1JWgnY0qSshwOBDQLJkymp2Ul3lXSokHKyDKuXNU5C4LVqNYHVYluJYm9cJdXAGpCWSGiyv4ylqq3tOmQJCuOJYCLKrbZb4XJY9jvaEzq5LQ4fE2/XiFNTqiQdxFkBmi+6YPdbov/AEnsfoncSSkWLDVi0yrx7M7TBAYTY/Cev6V5zg6/6Xb/AFHLmE1w1d1MhwMsOp+vIpE3GVjyipRo9eYV2kmwdpCo0A/FEj+Q+6dSuyMk1aOKUXF0xFj4jKLASSfkF55tJrw97zvsOQ5cP8r0HGvgBkAZje8nrKr216QZJjr91wSfyO3H0VHD4cMYS8uJMtgnUch00JTDA0C182Ay7rW3W8goHtGpIN7a67kdgWuMzH6Yv/K/TT0QbfZShyzC5zTYdAM7t0AX+oQG39q5JAOUaW16BN9lvzmu79rQAql7T7Oe4Zhq0F8cYu6OdyeyWKtpM11b+gjY2asHOy5WDfqT9ENhdsVXPyMbndpDRYfRWXY+HDMG2N7J7kIn2Y2L7pmZ4hxuRv78+W7rID1FWwOTrbAP+T45zc4YA87s7R6aeaDZi8fh3Q5riN4IzDsVasftJjHZZM7hP0Suvtpp/U5vYgf+whSf5MU6SZlGUlsn2T7SvectRkcxMdCrK18iVWcNjWkjMG3/AFCIPCeB/OSsGHqAiyvjyqXTElGvCUlAbRxgpsLvRE1nwq/tbGNIgp5SpAjG2V3aXtBiXy2mC2bWEn+yVu2Tin3c9wPNxlPK2IDIFmudeIl0dOK0zaDRqHdXT/geihLM10iqxpiSjRxVB0wXtGoBkELrH1xUYXCx3g6gqwe/DhY+qVY/DAkkDUXWhmjJ10zSg4lOe6WHqtUXkiN/BbqDK57DxUTWkbpHFdlHJdMaUHxY266ee5NaVYjvv1aeXXkkP+rcBBAcP5XI6O1CKweKgCfhcN9+x4hSlErGRddi4xocGjwkHcYH9iNx7cIv2Exgc0HMJ3zZeTYGsWuEboOsxwM6kL1LZVZtamH5RJ+LTXT6JsT8EzJdlU2ptE3cBy6CDCBxOP8Ae07/ABCx58PRaxRIo1XjUEx8h9V1htjuYA5+mV09YBHqR5LmSbVnTaTEGEb48u4zHTeOSe4enlYXnU36bmgeaUU8C91YFg8IdY8Tv7DU/chPdoHLREXAzGeOUG6L2g+kvslWvVbMmoC/oGviPqovaB3gc79jnaToWnhzSz2XzNxDzENawAnmZMepPbmmW03tNJ7nWFQtj/uYM30WepCrZYNk3pskaAdJ3fU9kVia2UaqPCDwMv8AptZosOgBPeVHjWg6xHNRzTp0JVsquO2y4VHmmxvhEue6TMCwDRE+ar2M2lX95lNRrvCH+FogAxYgaESrVitkh7i4GARBmAPJLK+yGsMgMmf3Ov2mNeSSGXFfRTjJ9Mho1Xsfkdv4TDgeHAq87HzwC4HvboVV9mbNc98lpP8AJwjyCsv/AC0DEMrgu961gYyHOABJfmcQDBMGL7u0LCUXkpf8+xp3VBm23ZGZlT8O41KknRt76cp+fOFaNtbPyn3vxP3ud4ptvDpB14KoYLI173O1d8TSPDPEN/TqRAEWXdlpbJxutE2HpEmpUZlaA69Spe7jAgftEzJtyKqT8dXc98PLw12uUZTNpsBCtlWoIc1oLGv13gjeIuEs/wCXtBtlib/EbTaxMei5YZIptyQ0oSfTAcHtF2fK4QeXwnpzTmo0luYIGnsnM7e4cTCsY2eGsiTMJck48k4jxbSqR51tqkW1SQLEB3Y/3socM+DMjv8A5CtO2Ma7DNblZTc57XtzvDpDMwsMrhN5PikW01VMpmOy9ODcoJs4p0paCa8OdoP+0/ZMcNhfAZ3GT0I/wt7KwUt944WJysHE/qd2TzB0AKJcd7iD0ix8wpylWikYegWGaQQJhw0P05gq1bF2g9rCGyL3A3FV1lQeDLEiWyfQ9rI1zmtJDXQNJnWPz1Q/YzVqmOQWMY4VCCSSSzWBuzfZdUq7ap8bi5v7A6AeuX7pRjPC1x13X3nepjhixzTTccroMSdN8cBCglaKtJDPaeMYxsABtoAFrcIGgQ+y3CtTuLB7gZ4ET80h20zLVyagZZudZ4+af+zVJzA/OIBjJN5MeKOn1CZrQvQEKTmZ2geJ7hTA37xblcre33gltMGQHNaOjAS49ymLxFRz7SAcvKYl0cfullamA7Mb5QSSedw0dbdkljpFiwb3e4pv1yfFHDR3kb9AVK9klR+y0mhf9x9TKNOFLT4bjhvHTly3einnwuS5R7AmkyA4fktNwoH6R5I9jhF7dQR81HVe0bx3IC8/hNuqY1nNBgB0Rmyqcvc+ZaLDqYmOX3S/Z7vfvcxhIaB4qkQT/FgOnU+SsGEwzWNyDd5r0fxPxnF8pE8kkrQt23JaYVCxlEtOabTMcOJ5bj26L0XHEQVTMbhmuJ3HcQurIrNjejWDo5gCjWYJvBL9k1HAlusGCN/biOSc+95FeVlxzi+tF++iM0gNAha7iTlGpsFLiaiV4vEkNIbvEF2+DqBwB3nU6WvL4cTbFaKh7W4lr60NMtY0MaeMElzu7i49CEhY2fNF7VM1Hdfsh6YXsx1FHC9yZcXtDTSYBZtOw/lmJI7wFw6rkzs/Q+HMPI6jqCoKT/eMY9p8TRBG/Um3c+q5qiQeGpHA745Fc1fZ0I1SGVxXofs1g6fuQ4Mac1yTc6nWwXnmGcZAP4FePZHE/wDRLf2uIVIOmJNa0V7G1C55DR4WAHzcPpKnwryC28xEDgh3O/6zy34S2DPI2RrGNHijWI677LnLsCxOFz1CSYFiT+d0zoYvNEgtLbNi9hugjQ+a593mgdz2Np+f+EbTwopguPAuuLADeeJ4Ba9CugbF4hjGkuvJiBqRuHIJNjsQ+xiB+0fl1Jj6jqu+Dr0/v90nzlrgxpME34XMTyP2WjEfrsvfsbWzUiOasbVSP+H1fxVWHkR5lXgBXiTl2TyI0Ve2vVAMNAzGwTms+GkpHgGCpWL3fCyw67ys96AtbHOysGWMGWxhdsbVY4l7swPICBygT5yp241jbZgh8RtOnGsp9JdiJSk+hZtLaJaHAXduCrYr1LzB6jTyTvHY5h0E9wlVR7eB7GVJsvGLS6I8GMjs2+ZVqY5r2h0Ayqm2s2YlNdiVHAuYdNR9R8vNFMEo+kuNptGgVfx7oBT/ABupVc2qbFL6MuiiYk5nujipWUyB8MdQhy65jineyXB7Sx4kcD6Hkea6JOkcqVsF2fUcHtIMTIPDQ6p3Ve3M4aEETwgjW+5JcRTyPIFxu4wfwhTmpJnU/CeYJt6k+YU2k9jxbWgl4IcI4/5TPZmPexrsps5xNiPluSrAPkEO3XbxhMsU6j4cogxe9uUc+KUdjGjst8FxLAXEWLpMXtAmNd6MeGtuYAaDA5oyo5rbSJ3n6BIK7X1XENacukwY7HRQHW+wjB4guqty3a0Z3niGiSB0THalcuY0g2fLuoFh9UDsKl/uMF/C5s8xBPzITDFsAYwcGR5mT8j5IsH+xU9p1jSZrd1u5u49vqo9l0G+6dVebgHKDxMgHp/dC41j8TVBY05GyAJAm+tzv1XW06VZjINN7WWlwackCwGYW9dwVYx1XvospW78DvYjHZMVBMCoC0dRcfVesNC8GZiC0teyxY7MOoII7W9V7bsfHNrUmPabOAKo1TJXYRimy0qmbU99Twz30gZzkGNQJN4V6e2QhMNhxle0ixJnuhVsZSpFG9mvavAe6DMS14qgOzOcx1QE5rAObJkjkIjVXvAbS2e9806tAksENljTH9Lovy1XmHtL7LGhW960f9NzvF/En9X9J9Cgsbsox4biJVLivAf45ST2z1qoME1zyX0ASby9lrDibKq43G7NYz/dpnx3LJe74r2aCcvTcqfh9nAtBg6RccEs2phchhD4vVB4zirtjSvtdlV4GHa8AQSXm5JJGUNvb4bzxV+2PRIknXL84+yp/svsj3bQ948ZvHDgOv1Ku2AMNJ4pJVehm2lTeyPHKn+0OIDWu6Ky4+vqV557Q4zO/KN1ylirkFvjGxSGX9U02TIJP8XeUhB06RLQBq75TZWDB4PK2+ronk0XjqfqqTkqJQi2wTH0wXC8Ejl91AzDHNY276dFYBs4OPvHva20NBNzxMIbEVWNlrJcd5sLb4KkpeIrx9YtLQwROqmoU5FxPCEORmf5H+yaDZL2gTUY2RIkgSNxCLRrLHXogNzN1kgb9+9KnCo8i7odaBad1zr2TWtQexxiw+4/Oa6L4Bjj3BOpHUKPQ4VgmMw7AywLteF+f1S/EVM/vAZENyjo4uBI5wfVKMXiy97hwtHL7Jg4y2f3C/Mj/Hqg7DGJVhs9ji3xlp4kWmZ3aI8bKrs8dKoCQLtY4DMOBBEOHEGxXLwxxOYCZ7/fzldNAZGUubAmxG48gqcpG4IUbQwboNRjPdkHxs0AduLR+0wbboO6FY/+H+3MjjQeYBMt4TvA+ajL21qTzMOkNbO913R5NvwlV17Sw52+FzXDsf8APzVFLkqfZNwSdo91Y+V0Gwq57LbYFekCfjFnDmrI10hGLJSVEOMoh7SHNzA6jkqdj/Z1zfFReC39rtRy5equxQGKwjXcuiZ7KY58dMqbMI/LlywRrOnmgquEYx2Z0PePhtYcxzVjxGz+DihhgmtvqUjTL841oFwzCBfU3TCpUysAUIZFyhsbX8gErdEa5MT7f2gGMN1T8FR94+XScxuBqZOgXW3Maajz+0G3Pmi9nvDGAxumdDpoDutvVK4x/bA6lKvEWB1KnSEuEPNgxgzPsLAxZojdI7obEYl5sGFrerZPf+yBaS/xQOQi1t6tWxsU+szIGse9utOr+ocWP3G+t4kWClVDt60IwIBcd/xEAk3I/U7XXcYseCDc7xW/USCZvY7k3xFKlnOXPSOj6VXxMg6tDxJHEE2NoPBbjsOWEGIiTugk753g29UVXQPLMfTa2m0/qcfrp0uisPVaB4mBx4m6CeyWMM6SPzyU9E23d4QZi/bRaCCbeL/KU4mmJkbx8tE6xlGGgk2uSPRK6rC1kkCToB6TwSSuwQ6KtQw7zWeAC6ReL8kbg2PZLXaB3hPL7W9UTUwuZwrMs9pvE9pjVB7VxFSBmtmMZtewHHkle9Fk6dsDfhSXkZW6mxsexm6kOEGU5nwL2aQ4niLT+bwhdqCQx8DxMg/1McWHrMNPdQ0aryYO+d8m2gVKdWa09E7nhz2Na3KxpAY2ZcS6A57zvcfQBR7Vpi5jWPnqjMNSZRBqPHjIhjBuJ38tUJjagePDeAPOZI9Fk7di1SaDvZiu5jw5vccV6XgsSHgFeabEZcFXXCEgAgoqVMScU0ixOaoqrbLjDYsOF7FdveFdNENgT6coZ9MIqq8IDE4iErKJNgWOfCqe28WYLWnXX7Jzj65dYacVW8cFNO2VS0VrENjXy+p5Jjg35mA8PzyI+SBxjbovCPDA3pPqR5WV5bic8HU/0NqLIaANQPlEfXzC3TxUOzElhGhMi+mpsuaDTGdhkTcDUHmDYopuIEZnMa6OFNpPzBHdc9nTX0GPAqtGdwdaxOvnoR3QzaWWWO8TDprLTxBm3Zc/6pxsGBjeAHzsAsdUAlxdafPjHFLTHqNbBq9IsERI3Hd/lSUKltQPL5bl3SxGef08xYRuBWNwj33FwN+VHfojrw9Ax7TDWu4xCWvolxFo3njO4dIlPcewWcRMCfX+6UitDGu4nXmXQEJR+WycH8dAL6ZbUaG3bMO7/FI6fJRY/DNe17GmORMdIduNz9kW6sG5nQf2t72He09EjxzH5oGbM47uOmugOiRdllEH2lFKhRY5gJl5IBGhOoN76XCX4fFtDoawAbngSI8pCZbRb71sf/G/IObcsT2LfVL6WznGxbb5KqSrY8ccu0B7RxD3GWu4eUefogcNVcyQ6RmPOOsqwt2SeHmmeB2Xm8L2WjXX0TpqqoLwNvk3QHsesLZhHXTz0V1wgskFPZJp2ZBb+xwt24IzAY1tJ7WOkNeYaHatdrAP6mndw0U+OyWSLSHZCw1COa7eFrInVkAeq88EtxAJ1TWoxB1mAAlB2NFiPFNhIMbrdPMfiAbNBcToAL9+HeEmxGBe+73ZRwbc9yUIosoSktIrmOIWYeTEA6QdbGZBPJPGbMpi+QE/yl3obeikfhj+23AAAdhorclVCr8WV22Km1HsILXZZtbhrB4qWvtMzBYDbUWP2O5SYjZ7iLAkckOcK4ZQWG2+b8rZQl+L7BKE1pG2Yx5vBI7fUI7AMGIcGNDQ6bZngertegkoZuFIEGTvG76oihRbrEHpv7LaNGE/WWCtsgMa1jw5hkBxLSGi9yIBlsEybGwMQCVrA4GvVzMo1DkpuIEGAZJvzmF1sna1Sm3IXZ2fsf4mxyB06BO/ZnC0Ax9mkZrZiJiP6eMrUm6QslKC2O67DlM6QR6z9EhxtNrGB0kgOEhsGSDYXNlbMZSBBEaiFUdpE5Hsjg/uwgOHlB80maNM2FWrN5s72TppyzcOdpRLqDDLt7R5Hd9+yS4d4eAbyINiRy+SaOysYQDrEzPYTwSR6Opx6oX/AOkGUttBcT9B8yjMFg40M8tUufh2zLmTzABIG4dNUfhcFTgGHA8RmafROjoSpDNuDB3QURSw4zNBtJAnqUPSaW/DUJ5PBd66+qm96/e0EfxcD84j1VFRKSb9BNtY00q7aIA905xa5uVpkCfFnjMH2sc0A7osucNkqsyvAJFiCN4NjG46FDe0Xi91UvIO/XU6oTD4rJVcRJzRYAnl23LSew48C42u/f2PCx7fhOYcHa9nfeVunjBOVwLXcDaeh0PZbpF5EmGjzPkLeq7qUmuEOGYcCBCFEZ4Ys2+qOvRB12F3xHKOV3fYKdlBrRDZA7n1MlD18w3A9D9FuP2aGFLsEdRpt0bbjx5k71xjKNNgDoJEDM5rA4NJvF3tJI5AqF4NRwpmRmMaefpKZ4+kBTDG6NEC/AZdT/XKyLyi9JOhNiKFNt2wQQCCODgCD3BBQdfGsYPEBCXYfDV3vexrg1od8RuYOgA8kzp7AYPE+Xu4uMj/AMRZBrY8brfYtG12u/26L3cxAb/5GymOJedaAjm8T6NTZ1Jo4AcEDjsS1jCWgF24GwW0ZJ/ZFTqs0LMvXTzH1hTuot4JI7GVHWDW8zchc0q9RhkEu/iB4fWY7LUFtV0NywN013AoqhVaBAfl+vP5pbQxTiJcx4O+xPYRuU3+saOXosrFcE9npDnFKNqYY+IgSDfvvHcSm609kiE048kcq0U7C0RLmaakTYiR/dGFgIANyBClxuFyPLgLQswOFcXTdRhFrstF6slobOtI80xpYY8Si6LABClyq6iI5tgopHj6BYWHl5BFFq5c1GgchPt+hmoz+07vP6JLgXm3RWrH081J7f4yOyq2GbDWnmR6pJLZ0YpXFr9jyhoiAEJhXI1oRROXZzCx7QdQF0QtEIinFKi0EuiCGn7KGrSDmzpp8p/+oRLR4Xf0oSlUHuyODSD2IH0KwVZX8DQaalRwIu4i4GgsjauDO4BLdnv8R6lPGJUWemJ62zSd31Qg2KyZLR5KykKM0pWo3IRDZzdAFK3BNbuThzAAh6jVqNYAKa7ynii6eHlTjCrUBtFhUjVy4LGqpymVKQdqFjKYGikWQhRrMAXULS2CiA1C0QuoWELGsjLJkcQR5qrVqJYDNvGbcNFbW6qu+07chBGjjPfQ/IJZLVlcUvlRvAmyZMCTbMqSAnVMpUPPs6IXDgpVyQmJojdZjzyjzSRj8rX9P/1HpCd4i1J/UKt1vh7faUrKY1dgmzmJ2xtkDs+nZM2tQQ8ns5hcuU4YttpIiWDZJXTaKLbTUraaNAcgZlJSe7U+VaIWoFhzmqNTlRuTkkY1dLhqkCxmYthYsCwptYVixYxoapX7TYbPRJ3tv+eiaLnGiWO/pPyQatBi6kmUzY1SVZaJVS2TqeqtdDRTR1ZVsKhaIW2LHKhzg+K/2n9lXa7bdlZMT/tP7KuO07JJFsfv8hOCZYJgxiEwWiYtWRpPZoMXYYthShNRNsjDYW10Vyfz0RMcvK5W1tqBj//Z'/>
                <Details>
                    <ProductName><b>Product:</b> XOXOX</ProductName>
                    <ProductId><b>ID:</b>526479</ProductId>
                    <ProductColor color='black'/>
                    <ProductSize><b>Size:</b> 38</ProductSize>
                </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
                </Product>
                </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY </SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80 </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
                    <SummaryItemPrice>$ 5 </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>SHIPPING DISCOUNT</SummaryItemText>
                    <SummaryItemPrice>$ -5 </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type='total'>
                    <SummaryItemText >TOTAL</SummaryItemText>
                    <SummaryItemPrice>$ 80 </SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
  </Container>
  )
}

export default Cart
