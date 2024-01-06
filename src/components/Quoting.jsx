import styled from "@emotion/styled"

// ******** Styled Components ********
const QuotingContainer = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Image = styled.img`
    display: block;
    width: 100px;
`;

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`;

const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`;


const Quoting = ({quoting}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = quoting;

    return (
        <QuotingContainer>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Image" />
            <div>
                <Price>The price is of: <span>${PRICE}</span></Price>
                <Text>The highest price today is of: <span>${HIGHDAY}</span></Text>
                <Text>The lowest price today is of: <span>${LOWDAY}</span></Text>
                <Text>Rate of change of last 24 hours: <span>${CHANGEPCT24HOUR}</span></Text>
                <Text>Last update: <span>${LASTUPDATE}</span></Text>
            </div>
        </QuotingContainer>
    )
}

export default Quoting
