import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
  Phone,
  Images,
} from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { LinkButton } from "../components/ui/Button";
import { AnimatedCounter } from "../components/AnimatedCounter";
import {
  staggerContainer,
  staggerChild,
  easeOutExpo,
} from "../utils/animations";
import { portfolioProjects } from "../data/portfolio";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    {
      icon: <Shield size={26} />,
      title: "Гарантия 10 лет",
      desc: "На все виды работ по договору",
    },
    {
      icon: <Clock size={26} />,
      title: "Точно в срок",
      desc: "Штраф за просрочку 0.1% в день",
    },
    {
      icon: <Award size={26} />,
      title: "Опыт 10+ лет",
      desc: "Более 300 успешных проектов",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Честная цена",
      desc: "Фиксированная смета без скрытых платежей",
    },
  ];

  const services = [
    {
      title: "Кровельные работы",
      price: "от 1500 ₽/м²",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXFxcXFhUXGBcXFxcXFxcXFxcXFhcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLy0tLS0tLS0tLSsvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAQIDBAUGB//EAFAQAAIBAgIGBQYJCQQIBwAAAAECAwARBCEFEjFBUWEGEyJxkTJSU4GS0QcUFRYjQqGxwRdDVGJyk6LS8IKD0+EkM0RVlKOy8WNzhMLD1OL/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALREAAgECBQMDBAIDAQAAAAAAAAECAxESEyExUQQUQSNSYYGRofAksSJC4Qb/2gAMAwEAAhEDEQA/AEmKh1VTuqouqr7tz8/Yg9VRdVU7qqHU1LlsQerodVU7qaHU0uLEDqqHVVO6mh1VS4sRFjqzj0FM1iFtfZc51baD0YGzYHiPCtfh4gosBlXkq9Rhdke2j011dmJg0JiVOy44i3451MwanYw47cjlyrZAcKjyYMMbkC9eZ1cW6PTGlh2MxjIwo25VBLDbztWw+TO41HGg0Y9pdlRSj5K4y8GaA50DerPSmg965Wz/AMqzsxZTtNxtFdIwU9jnKbhuWaA0/GxFVEeLcWJGVS2xpZT2c93CjotBVky3jxYGV6mnSCgZmshGGbjtz4CnZQ4UAA57/dVySZ2l7DXSbHiYgAeT/W2hoDQhZg7jsbr7+dNLo9yfJIq6jxzRWBGV++u0nhjhicYrFLFMi6SwKxsWALX3cPdVeJVI7Z/sj8a0GldIoUy21lnS5vUpptaiq1F6F4mJBAQAsT4ePKm8dh1UMTnls3VBw2JZBlSMRKzm5qqm7h1VYgOOVN9XU3q6Lqq7pnnZC6uj6qtNo/ovJIAxIRTnnmbd1afA9H4IwOwGYZ6zZm/3Vyn1EY/J2h005fBzR8ORkQR3i1J6muu4jCI4syg94BrPaU6LoTeMhMs8svVasQ6pPfQ3PpJLbUwnVUOqrQYvQbxi5FxusD/QquaHlXoVRPY4SpuO5CEVWmidGhzdzlw40yIqfSRgLA27qk22tCwSTuzQzOpyFshs3VFQxqLMTfabCqdJWBvfPnTj4tybk/dXBUmju6yDMdF1VTerourr0XPLhIfVUOqqX1dDUpcYSH1VF1VTNSh1dS5cJD6qn8FhgzgGnOrp2A6pBtsqS2LFK+pocDAEzIztblyqb8aFUkWlOIqZFjEYbBXz5wluz6MZx2TJi4432VIXEg1Gisw2Wp02Armzoh74yKUsl6ryc6cVjULclzLlWO09gu0X41q0mNQtMYXXUkHds410pTwyOdWGKJjocsrVZ6MjDAg+HKkJhDq6wzztbhz503CrA5G1eyVpJ2PHG8WrlthIFBZbc/GoekWtkOOR9dOOTFvvffUKWYturnCLbudZzSVhD4hhkCeOVR5pWbaalMWtYj7KZ6vlXaKRwk2MSXPqpvq6sVwTkAhSQd4FFNhCu23dvrSktjLi9yvEVLWGpGpT0C99GyJXZCaC26rnQWAUHrHF/NHdvNMRi5F9gN8qu4UJGXicq4VajtY9FGmr3LRZwafjkFUpSThTMuMZDY3ryKF9j14rblziMSF2mwqO2kEO+9UmOxeuBUdJFUGwJJ3muqo6anN1tTQz6VjA23IrL6SdXYsBSCtFqV2p01F3OE6rkrEfUoalSNSh1dd7nCxG1KHV1MWHnUhcPHvY37qjmkVQbKoSPn9N/FD+Ao1kf0q+sxf5U/ioHRbvHiAL/VhDnwjlJpqKS9uziB3wEH1/TffXwlWq+5n2nRpe1Bda3pE8Y/wagZm9JH6yv8wpyaRstUOOOtAx8NWagmII3kf3E5+6arnVvcyZVHhDfxo75Ivs/nozjRvkiv3j+ajml6sazylAT9ePGrny+n+6kxY5T+eJ/Zjx/wCEhqdxV9xcil7RXxweki9Rv/7qMYseep7lPvoocUxudY2G++kLW53Fh3UiPSUbZidSD5vxojLh2Tfxq9zV9xO3pe0eOIO7/oajWduB9h/wqMMfHc3aO19pafMc7w0zLj4c7yQkG+RksLcO1htnfTuKvuGRR9pbR4uQbFf2HqVHpaYfmye9GH31m48TG+UYhaw2K8JsByOF2U0uJhsSZIARsXWwxJ9Yw1h41h15vdm1Rh4RrW0/NvhX1sRSR0jcZdXFf/zc/urMjHxi2qYhlmRLh8/+QKUmKXzk/fQ/4NM2fJcuBpfnI/o4/wB7/wDmmn6QMfzcZ/vT/JVRFMD9ZD/exf8A16WcQgyDRn9brI/Af6PTOlyTKj5Q+2NcAgLGL7usPh5FN/GpFOSpff8ASHbw8ikvKq/WQP8Atp2dhBBGG27Ra2XfsZ61POi9pP8A6ldF1FVefwjm6FLj8skYjHubXRBuFnLXPdqikwaVK5qFJHlAZsOJttsOQqJI6nIFDtyBTZa5Jvh0AA2kkm1r6rbKGHBcWUGRAbXjMUiDuLuFFv8Ayh69tdqdWco6s5ypQT0RMk0szHWOqR5y3IX9oDNe85U8mnCDfUjy+tmR7a3CnkwBqrRrt1WTnOyo8cpW276VlUEX3IbC2dFiG6uwkIsfJVnSSVedpSEUDiL2reJ8jBHguo+ksgWwEYtvtlvyDa3Vn278qjzaR1jrEDM2uTqjZfy3sCP2A9QZVZRrtkgzvM6ySg/qax6teWfuo8MGezxi4ubyTMkjjj1eqWCnkbUUmtUHCL0ZIbFELewAO9gwHMIp7bt/ZF6Wcdq7V1Qdg2u/AhB5Iz2nZvA21Aw8usxEPbkBN5JXjYgbDqlCxG/K1u6lSzCJtRe1M2x5WjvnuuGDBb7AB3CtZs+TOTDgsF0i6CwC9YT2UBFwNxc7udvVepQ0zIJFjFiQLudgGW7iTVPMfi6axN3bIsxQ2J+rrEoSOFKwaskZcdp2zuNV8t1m7Osveay5N7mlCK2LiLpE7GSwUhNhzN+N86r5tKs0Yl7O3tW2D13y9dRNFPdXYENc56rIx7rpsI4Fm76TgnsWTMFs9UsmuP1rKda3MsT3UUmg4p7knFYphYhlVGGTEXz9oD7fGmGxc6tqssRv5J1mTW5AFTn3E0mL6O6sbIfrEqg1j5ueuSd5JvwoKrLdNUlOWrGij9XPWPO5t91azJcmcqHAsaWkDajYdr/qvGbjiAWDW9VKXTcd9UpKrbx1bG3eQCBTBvayjrVOwLqpGAOYzI5Z+qjk3qfpNn0Q1FVeGtne3ffkK0q0zLoQJcemcOxsJVvwJsfCpizodjL4iqfEAW+k7YPkw2S1xwv5R7zbkKb+LLYu4CgfUGqoHPWFjf1juraryMvp48mlggLmyjW7qnjQzb2ArE4bCG5a8icE1w3rJOtn67UQxGIN+rkbVBtm4Jy2+SbVHWl4C6eK3FaTxeFw5AlM6E7O1ER4rlUeDTWDY9mbEEb9WSH7+sq90lisRGhZhh5G81YCb8rnbWdbpRiT/sC/8KfxIr5UW3+o980l5S+5cppKCQGOD44HttR1lcc9XriPsqJi8SMPbrsXjVv562J9mZaTF0txqrqrhAB5ogZR4BwKi4npDjX8rR0T/tQA/wDVJRwd9F/QVWNrOS/JPwmnIL3OJxbDgrFftM7fdRY/pBESNTGYmIDaCA9+8mYGq8aWxW7RMA74Yv8AEqVh9JYxshonDknYBHH/AD1rA3un+DGYltJfkA6Sw2N9IzCwuboeIGzr+dMt0li3aUcf3JP/AM1XwbEKt5MHgkb0dtaQcjqBlHrIqtXT+NU3XR8ItwQX9R6yiu/D/AclHdr7sKTEOsYmbSEqxnY7YUhTwsS9jScJ0lwi36zSLud30SKo5kZk+Io8R0oxrHWfARu3NASPWZajSdJsUNui4jz6tf8AFphl5uHVh4a+4odJI89XS4AO74uPts+dN/LKHZpVD/6S/wD8lIfpNPv0XF+6U/dJST0jffoqH9wD/wC6rZ8MmZHlfcfj0kP95Rn/ANGf56mxYg6pf46pQbWGDYAbN/rHjT+GgZoDiJdH4KFdoEkWq7DkoJOewXtVWOmcjRdT8QjEWwRGF9S19moGIrGr0X9G7xWsmvuWuJ0xGCOpxzKurZr4ckt3FVAtysaRJjlQlWxhDWFv9Hbs325Bbh9m3ZfZfZWYjS6Rav8AoGGWW4bsQHsDcGYfX2ZDZbibCDLp5Sb/ACZhbk3OthmN7778a0otcmZTjfdF6ukl/TW/4V/5aV8pr+mP6sM/uqi+XIv92YX/AIZ/dRHT8X+7ML/wz+6tWZjFHlfdl0+N6wqizmZicopYXSNiM7l9U2K21hxKgZXvSp8MzubphsUwybWtGyHzTZXuORsRzqjwulopZUiGCghLmwlihkilXI31JBYre1tuwkb6tZPiRdYUdY5V7CmImNuaa62DHK5W52bK7U9g2nsTZsJI6Wk6iKNRcR6okQW3sXC5dwU86Rges1bwxYRFP143Lqd19VY1B7taljQcdwXMktswJZHkUEZg6rHVvztUHGzYMS6vXGJyQH6p5EW+QHWFOwG2DtWOytkHpMMMP29XCkk+VJqYcgnzXVCD3WB5mnJ9HySsHlSAWGXYE1+TM4BK91u+nYNDxKdexdrW15GaRrHaAXJsDlkKrcacJE2oZpYv/DjkmCKOJVDaJcuQoCZiXdiITHhRfyVaQsSBvEJjF+6/rpzD4V4VIRYmvut1I55orA+HrNHBomAL2UVg1m1j2y3Bi5uSchY3qv0hHho7CWeYX2J10z3H7KksV5nKqB3C4ctIWUYZGU9oRgStf9d7KR3WHfT2kUd8jFAVGetI5IHMpqfZreulYbBQMitEF1bdh4zqkA+a6WI9RqDjsLho7NPJIRfJZJJJATtyjz1j6jQE7DpeLMxy38kr2VI4XBb7KjRK0eZWCFL7Lklid+v2Qp9TU7BDFIhaFuyTm0TFDcZWbVt2hwao8uBw8V5JWJt9aZy9r7hrXtfgBnQD2IhIa6QoW892yAPqv6h40sYY6vbRWb9QFVYcCpJ+00iKRJo7QS2VezePUBW1uyQynVytkRTMWi4UPWnyxtlc9u3DX2heWQpYDiLM2QVETzLksed0I1ft76II0ZskK7D2wQMzxU5nxpoWxA148UzJsPVGIr3awXWHqan8HgY4r9X2b7duZ4tfInmc6WAiJVF2kQa/napsfWSdXxtRLrSsCyxlRsBYO/fkSAeWffTIwyzXPXtKl7FVaPVvwYxqCe4mnzo+PV1AABuuASO7XBA7quoF40PbUWMEbO0bKO8DM9320eGgAUBlS/6qgL6gTlVfhdHi7WnZ7HySVZUI4KtgpqWVl88eyPdVBA+fWkfRuf7pPfR/PjSfoW/dp/NWzGktF+kHhN7qA0noz0g/5vurx+ka/kfBjl6aaU9AfWkf81Or0w0p6Eeyn89az5S0Z6Qf833UBpHRnpR4ye6npfJP5HwZf536U9Cvsr/PST000mPzF/7Kf4lan49o30o8ZPdQ+NaN9KvtP7qXpfIt1PwY9unmkx/s59hP8Skn4QtJD/Zz7Cf4lbLrtG+lX2m91DW0afzy+2fdU9L5H8jhGMHwj6Q34c/uh+ElGvwlYzfD/wAlvwY1s9TRx/PL7f8AlQ+K6P8ASDv18qN0uS/yOF+/QyOG+EXGyMqJBrMxsFEElyT66v8ATmn8dhYRLMsN8uwoLNc8g27vq70fi8DBfUli1jtYuCe4E7BUfERYGZ7tiA7HYOsU7dwFqxLC3ozrF1FHVK5ik+E7FNYLELkgWMMl7nYAAxualaV6fzxgRuE602LBI3KovmMVJu53gHLZvy0OHiwAY2mRALi5kXXJG23mj7aJtG6L/SE/ep7q2sHJzbrcIyo+E+bZqIP7iX30r8ps/CP91KPxrVfJ+jPTp+9j91F8n6M9On7xPdV9PlmPX4X79DK/lMxHCL93J76I/CZiOEX7qT31q/k3Rnp0/eR+6iOi9GfpCfvI/dT0+WX1uF+/QyXz8lxLLhpBFqSkI1kkVrHzW1sjzq/bR8Ri6nq16sC2pYWy/rbS8fozR4UtFPGZV7UYMqWLjNAbC9ibbKz6aJln+kxEzo31EhdkSP1jN25nwFdaWHwHj/2Jy9G4OMpHmtNKR4FtnKp+GwccadWiKqWtqgDVtvyqiTGY6LsdUmIAyEnWdWxG7XXVI1uYy5UGxePkyEUUA3sWMreoWAv33rqQn/NyDcHA3KJZQoHAKGsByqZg8BHCLRIqDbkLXPE8TVLFoKRfpI8TL120l2LxueDx7Av7NiN1H8qY4ZHCRk8ROQPUDHegJ76CgYkhWQk3IR3RSTmTqqbXPdT2E0VFFfq0Ck7TtY97HM1SyQYufKVlhj3pESXbkZTYgfsgd9PxYGeAXwz9Yu+Gd2PrjkNyp5G4PKgJuK0TC7FmVlJ2tG7x6x4sEIDHmc6VhdDQxnXRe15xJZrcNZiTVa2ksccvikQ5mYkeASmRomWU62Ime+5YWaJV7tU3J5kmgLjG6PR/KBv5ysyPls7SEEjkcqj4fQ0CsGsWYbGkZnI7ixNvVao7SYuIaqBMSu4u3Vygfr2Uq/eAO7fUd8VjnyEMUX6xcyEdyhV++gLrEYQHaDe1tZSVa3J1IYeo1XjQcN7uZX32klkkX2XYiouG0OynX+MTdZvYsWU8miPZtyFuRFPz43FrkMPHL+uspW/ejKSvdc99AWkeFUZqADa11yNuFxnUHE6KVz23lZfMLnV9Y+sORJqudcXNkwWBN/VsWkP9uw1fUL86lYPCyQ+RKzr5kxLj+zJ5S+vWHKqCfFg41N1VVNrXA1WtwuMyOVRsRo8sTrTTap+qGAHiFDfbUabSGJzAwgPBhMur/wBN/sqN8TxEvallaLzUhYqF5knyz3i3KhC2w2j4kIKKqsBYEAK1uFxnblSpsLITcSyLyHV2/iQn7aTCxVAGJkYb7KC3Dgt/AVXSaXcGwwmJ9QjI8RJaqClPRR/Tze23vpLdFZP0ib2299dU+a7ekHs/50r5qn0o9j/9Vyx0jy4Op/Wjk56Ly/pE3tmknozN+kS+0a6181T6UeyffRfNZvSj2f8AOl6RcPU/tjkh6NT/AKRL40Y6O4j9Ik8a6x81W9IPZPvpLdFG9Ivsn31L0hh6r9sco+QMT+kPRfImJ9O1dWbosRtlQd4Pvqdozo1Gja8hEhBBAtZcuIO01HKmjUY9S3roYTor8H+JmtLPipI4xuCgM68mJ7I56p5VadLVw8SGDDqTIVtrazHV/WJJ/wC/21tdNwzyrqxOsd8rkFrDjYDM9+Q51nj0RZQWaVP1mOt4kmuGGE5anrlOpTjaGrOXQ6HxzMAJmYnYAB/Vqs8Rh5oI+qil15W/1k20KD+bh4Di2052sK6Bhej7sh1GCg/WN7uOWXZX76S/Q2Q/nE/i91dllnmb6hK3k5SMDi90n2Uk4DG+l/hrrK9DXH5xPBvdSvmdJ6RP4vdV9MxfqeDkowOM9L/CvuoviWM9J4ge6utnodJ58f8AF7qL5myefH/F7qvpi/U8HI/iWN9J4KPxvRHCYwfnL94X8FrrR6HSefH/ABfy0R6GSefH/F7qnplv1PByERYpXQs1wHQnIbAwJ3V1RDQxvQWQqfpI8s9je6s7pLpGoIjw4E0rbAD2FHF2Gzu291ai4+DrDMt/mjQg50s1k4dPzRMFxkaopNhMl9QHbZ7+T37K0iYpSLhlI4ggitmx0m1KLb6rcfpaGIXklRe8i57gMzVJ8uYqYn4rEoQfWm1gX7lByHfnQGuNNNlVNovpCrHqpx1Ew+oxyYedGx8octtWj4lPOXxFECQsgPfQZaz2kekUEZ1VbrJNyR9o35kZL66iRaV0gPpGhjePfGhIkA5EmzEcLC9UGlZbbKNZePjUDA6ZgmXWSReak6rKeDKcwaXPjI1F2kQDiWA/GgJzLTRWs3P0iZzqYQBzvkYHqx3ece7KnMPpyWLLGRhFOyeO5jvwcbU7zlS4L8S8R66WADsqMMTGwuHUg7wwIqFjdKQxC7yqvK4JPcBmaELJk4UkSEbRes6NNYyQ60MUfVjYJCQ7DjcZL9tWWB0wj9iQGGXfHJkTzRtjjmKXBZAqf86IxU09uI8agTabhQ6rTop4FhVBpPyip6E/vF/lpP5QYiLGFvVIB9wrnnzWh81fCnF6FoVL6qqoy1jkCeAyuT3V5H0/LLDq1J2imzoUXwgRKLCFv3g91KPwhRehb2191c3bodDqs90subE3XV4X1wBRDoQCuuI9ZTsZbMPFTRUG9EzUupw6yidJ/KFF6F/aWnYOnkfmOb8WT7LCuUHonHwrQ9FMPhMGddsG80h/Oayaqg7kU7O/bWZ0ZJaMtPqqcnZm4fpxGtyY3PK6/ZTR+ESH0MnitYbpPF8ccM6BEHkRi2XNiNpqswPQtJCdioubudij8TypGjK15Mj6um5WirnU8F06SVtVIJL2uTdbKo2sx3CqrFdOo3lOvGxiU9hQV7VtrPf7qxuk4EWE4TC3jhJu7bHmPFyM7ctlZk9HV5+JrWQ2tyPq4J6HZl+ESH0MnitGvwhxehk8Urja9HeBPiaM9HzxNXJfJnu4nZh8IcXoZPFaMfCFF6GTxX31xY9Hz5xojoE+camS+R3UTtP5QovQyeK0n8ocXoX9pa4udAHzjQGgmGwmmS+S91Hg7OfhEi9A/tL7qQ3wjR+gb2191cbbQTH6xpHyEw2GmS+R3UeDsU3wlxgEnDm3OQfy1R4DBRoS6IF1zrZc865lidCNa+tXTdHPeGI8Y0P8ArpThh8ldRT2JWOgV0KsAQRsNZ/5m4U59X9prSHMUiBq6mSownRfDRm6xi/E51bJGF2ZU6aQ9EBjSmjIsQoEiK1tlxs7qpx0Pw2VkA45A3HDMZeqr6J7ZUs5HkarBAweh4ovIQDuFShlT1IcVAV2kNA4ec67xqX3m1ie/jUSPophlNxEvhVtcinle/fQEWLCKosoAHKl8toO0HYe8U8RTbCqCmxHRXCPcrGqMeAyB5DZ6qcwnRyCOxEa63G1v+1WJFLSbcaWAgQgbKbxMCuupIiuvmsLj1cDUy19lNstUFF80sGdkduVzapkXR+FRYRgDuqYy0BIRvpYDGMmWNGfbbdxuQB99VE+mxIQdaSK31VbXT2W2Vd47D2ja0esdXJWvY77ZZ+usdjsTEAQIpEbVz7YZQd4IYX8K8HV4nNJH2f/ADrpQoTk0nK/4sv+kjD41ZXCzzExKWZEsF1jtJIGXj+NWMWknncRo/VRDcDYW99ZJsTHY2Ivaw2Xz/7UrBwuytIXWNV8nXv2u62f2V9CnVjCJ+Y6inV6ibf14R17C6Vkw6gYcIw+sGA1mPHWNr+Iqq01p2WdrTdi3krbb3XGQz3X2DOueR4ycAZ3GVrSDaDcbxwFano1PiJA0mJsuGTytcKdc55Ja97bz99Sapt4jVKVXDl2uixweFVrs7KkQzZ+Y4cT91SJfpSsa6yQqL6oyJN7Ak7bnbnnWe0p0g+MMEjPUootGhFxcGwYrvOf486v8AnVwi976u21gbZA8KsYOSuTMhTlhV/nn6FFjU1JWWxC7iTf7b34+ApKpUPSmLDTAKwsNa9jvvb31OhOzZVkknY86m5LExYWj1KcC76cUD+iKyBjUohHUrU7qUqiguRBFSuqqRcUq45UFyI0NI6up51e+myg5UFytxEBINh4cN9XejT9DH+wv2C34VW4pgBlU/RzfRJnu/Fqx5PZ07LGM5UkNY0mBqJzY1T0km9JakK9GTRAQadRrimWpKvY1QPg7qMmm2a+dAPUATU1e1OE0hqoHY5L0bVEJtT0ctAKIpsinCaSaAbViKkJKD30wwpsiqCWy02VpEeIttp8EHfVIdGxi3BA37jsrP8AzVgLa7Rrr5XNvurTWoiK+VJJnvjJx2KjD6HRfJUD1Cp6YUcBUi1V+lNJBBqqNZzkFG29RRSK5Ng0hi1jFgLucgBt8KTgNGXPWSgM52A5he7nzoaN0cQeskN3PgvIc+dWl6u5NhPVDgPClao/r/OheivWrmRPUr5o8BRmFfNHgKMNRGpcWCXDp5q+A91GYF80eAoKoGQ2Uq9LiwRgXzR4CiMCn6o8BSi1DWpcWCMK+aPAUZhXzV8BRa9DXpiFgxGNwA9Qo9QcB4UkPRa9MQsLIFc26TSKk0pZxYZkm2QsDnauisx4Vyfp1oKF8TLicQ7RhY0JQEfSWvqgEZnOw3E33VqFRRd2ScHJWMxidLz4liuGJjjH1/rN7h9v3UiLSmJwzAYgmWK9i1u0vPmOVX2inVxrrGIwclTzVAAUd9gL871Kx+FV1KkAgivatVdnlejJGFxCuoZSCCLgjYRT16wg0TiISfi8rKp+qcx4HKnNfSPpR7K+6tXIbUmqfS2m44BYnWfcg8o9/AVQthMbJk87AcF7P3WqZo7o8qZnM8TtpcEP/TpvpBMY+CLkBy5+up2iOkLq/UYsBXPkybFbv3A89ndvu4EC5UzpjRMc6FWHcd4PKgLK9ETWITR2Mi7MWIbV3A528b0rq9IenPsr7qXBsHNqzmlNOknqsMbtsMm1V7vOP2VB+Rp5P9dM7jhcgeGyrfA6LWMZChSpWLSEfbSYycUbMH1H8CKvtB6fSfskako8qM7eerxH21JiNqg6Z6Px4izjsSjY65H10IXhps1j/iWPTsjEsQOOZ8Tc0BhsecjiD4CrcGnxeISNdZ2Cgbz/AFnWcn01O5vDZU2DWW5PM8O6ig0ASdaV2kPFiTbuvV1Hg1AtamoLh/hDf9Ih/g99Nj4RpPTwE7PqfgawTaDW/k3++tLoro5Bg1GJxChpfKii4HcWHnZjI7K8eQl5OsepxbI3GI6UvDH1k8iIpsEU6odiRe5va2/LblWVw/TNldnWWK52XKsVHAZ1jukTyYqQySc9UC9gCfv51UNomtZGljPdK+h1JPhHcXvNCW3ZoABz4+Iok+EWT08NuWp765WdFUk6LNMhcl7lHVX+EWXb10AH9n30k/CHNumh/h99cq+TDRjAGnbrkdydXPT+fb10Xsr76Jun09r9dF4J9171y5cM1L+LtUyFyTuTpzfCLIPzsJ5kL9wND8oM4H+ti43AXMeNcwODNNnAmmQuR3J1FPhFnOXWxX42X18qJvhCxHpY+/VU1y4YNqcXDtxp265Hcs6U3wiYj00XrVf6FJ/KPP6aLwT7BXOfizUlsETTt1yO5Ojn4SZx+eh8F99AfCTiPTQ+C++ubfJppJ0aadui9ydJPwkYm3+shtx1V99MjS7Y5TJKyMVbVyAtYAMNm+5rm8mjzWt6DJaKQf8AiX8VA/Ct06Ki7h1sSsaWIWqWc7VCBqSpyruc2MKudqe1BTb5NT6mhBOpQIpyktQIabKnYmpDU2GtVKKnjzvSQlPbRTSm2VADUoFaXQoBkijR7UphSCKoJBAbvpvq6bR7VJVr0sQa1KGrTpFFaqRkrDYaPCjXezzEdldoTw2tz3VQaRkaVy7m5P2d1ChXOCurs8teTi8C2RCaAU0cLQoVuxwxMBwg4Un4lyo6FLDExPxMUn4nyoUKWLiYPiYofE6KhUsXEwxgqHxMUKFLDEwHBigMHyoUKWGJhnCCiOGHChQqFxMIYag2FFChQt2IlwwtU3oythKOaH/qFChU8nak9S3p+E0KFaPQJl3GnIzQoUA4DQNChQCDTTUKFCio3pUgoUKEEhqANChVADSSKFCgEGjV7UdCqQko96VahQoD/9k=",
      desc: "Монтаж и ремонт кровли любой сложности",
    },
    {
      title: "Фасадные работы",
      price: "от 1 500 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      desc: "Отделка фасадов сайдингом и штукатуркой",
    },
    {
      title: "Пристройки и веранды",
      price: "от 20 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      desc: "Строительство под ключ",
    },
    {
      title: "Замена покрытия",
      price: "от 2 500 ₽/м²",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqe2PyiR8Ti4gHrDDGCTtp5DmKxTcv31KDpA&s",
      desc: "Демонтаж старого и укладка нового кровельного покрытия",
    },
    {
      title: "Кровля под ключ",
      price: "от 3 000 ₽/м²",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYDxS_4s0RCGFyxTFaZwWz2_hk1we-UIGgg&s",
      desc: "Полный комплекс работ от фундамента до финишного покрытия",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
      className="page"
    >
      <section ref={heroRef} className="hero">
        <motion.div className="hero-bg" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Construction"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </motion.div>
        <motion.div
          className="container hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ✓ Кровля • Фасады • Пристройки
            </motion.span>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
            >
              Строительство
              <br />
              <span className="gradient-text">вашего дома</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: easeOutExpo }}
            >
              Кровельные работы, фасадная отделка, строительство веранд, террас
              и беседок. Гарантия до 10 лет.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: easeOutExpo }}
            >
              <LinkButton to="/kontakty" variant="primary" size="large">
                Бесплатный замер <ArrowRight size={18} />
              </LinkButton>
              <LinkButton to="/uslugi" variant="outline" size="large">
                Наши услуги
              </LinkButton>
            </motion.div>
            <motion.div
              className="hero-stats"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="hero-stat" variants={staggerChild}>
                <span className="hero-stat-number">
                  <AnimatedCounter value="300" suffix="+" />
                </span>
                <span className="hero-stat-label">Выполненных объектов</span>
              </motion.div>
              <motion.div className="hero-stat" variants={staggerChild}>
                <span className="hero-stat-number">
                  <AnimatedCounter value="10" />
                </span>
                <span className="hero-stat-label">Лет опыта</span>
              </motion.div>
              <motion.div className="hero-stat" variants={staggerChild}>
                <span className="hero-stat-number">
                  <AnimatedCounter value="10" />
                </span>
                <span className="hero-stat-label">Лет гарантии</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="features-section">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            tag="Наши услуги"
            title="Комплексное обустройство дома"
            subtitle="От кровли до беседки — всё под ключ"
          />
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="service-card"
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-overlay">
                    <LinkButton to="/kontakty" variant="primary">
                      Рассчитать
                    </LinkButton>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="service-price">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <SectionHeader
            tag="Портфолио"
            title="Наши последние работы"
            subtitle="Реальные проекты, которыми мы гордимся"
          />
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioProjects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={staggerChild}
                className="service-card"
              >
                <div className="service-image">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h3>{project.title}</h3>
                  <LinkButton to="/portfolio" variant="ghost" fullWidth>
                    Смотреть все работы <Images size={16} />
                  </LinkButton>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
