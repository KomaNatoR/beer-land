import { Link } from "react-router-dom";

import { GreetingStyled } from "../GreetingPage/greetingPage.styled";
import { FaBeer } from "react-icons/fa";


const InterestingPage = () => {
    return (
        <GreetingStyled style={{width:"480px"}}>
            <h1>Interesting facts!</h1>
            <div>
                <h2>Губить лососів не пиво: Popular Science</h2>
                <p>Вчені з'ясували, як допомогти лососям розмножуватися - треба лише дати їм понюхати пива.
                    У лососів один із найнезвичайніших життєвих циклів серед риб. Вони народжуються в прісних річках,
                    подорослішавши і зміцнівши пливуть у море, а потім повертаються туди, де народилися, щоб залишити потомство.
                    Допомагає їм у цьому потужний нюх – вони можуть визначити конкретні мінерали у воді та запах рідні.
                    Але якщо це лосось, якого вирощують у спеціальних загонах, повертатися їм нікуди.
                    В результаті вони пливуть абияк і схрещуються з дикою рибою, а у тієї від цього псується потомство.
                    Вчені в Орегоні вигадали привчити фермерських лососів до конкретних запахів, щоб вони пливли на них.
                    Давали їм і креветок, водяний крес і навіть шкіру інших риб.
                    Але все не працювало, поки вони не вивели спеціальний коктейль з амінокислот у лабораторії.
                    Але це виявилося страшенно дорого і масово застосувати метод не вдалося.
                    Але тут один із вчених, який варив на дозвіллі пиво, згадав,
                    що взагалі в пивних дріжджах міститься глутамінова кислота, яка лососям цілком до смаку.
                    А дріжджів після виробництва пива залишається сила-силенна і їх зазвичай просто викидають.
                    Вчений привіз осад своїм колегам, а ті додали його в загони з молодняком.
                    І ось цієї весни дорослі лососі почали повертатись у рідні загони.
                    Тепер залишилося лише закріпити експеримент — і технології можна буде продавати в масу.
                    А автор винаходу вигадав, як назвати сорт пива — «Очманілий ель».
                </p>
            </div>
            <a href="https://www.youtube.com/@beercult">YouTube: Культ пива!</a>

            <Link to="/beerlist" style={{marginBottom:"15px"}}>
                <FaBeer />
                One more mug!
            </Link>
        </GreetingStyled>
    )
};


export default InterestingPage;