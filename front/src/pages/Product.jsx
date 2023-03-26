import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../Responsive";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <ImgContainer>
        <Image src='data:image/jpeg;base64,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'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Jeans</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ratione sit explicabo facere cumque delectus, consequuntur repellendus veritatis excepturi blanditiis necessitatibus praesentium repudiandae modi saepe, ea ipsam ipsum dolores fugiat.</Desc>
            <Price>20$</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkBlue'/>
                    <FilterColor color='gray'/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to cart</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Product
