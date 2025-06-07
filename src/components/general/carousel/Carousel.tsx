import { useCallback, useEffect } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import WindowCard from '../WindowCard'
import '../../../styles/Carousel.css'

const HomeCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

    return (
        <WindowCard title="News">
            <div className="embla__buttons">
                <button className="embla__button embla__prev" onClick={scrollPrev}>
                    <IoChevronBackOutline />
                </button>
                <button className="embla__button embla__next" onClick={scrollNext}>
                    <IoChevronForwardOutline />
                </button>
            </div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <h1>This is slide 1.</h1>
                    </div>
                    <div className="embla__slide">
                        <h1>This is slide 2.</h1>
                    </div>
                    <div className="embla__slide">
                        <h1>This is slide 3.</h1>
                    </div>
                </div>
            </div>
        </WindowCard>
    )
}

export default HomeCarousel;
