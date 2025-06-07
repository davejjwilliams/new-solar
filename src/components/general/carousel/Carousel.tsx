import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import WindowCard from '../WindowCard'
import '../../../styles/Carousel.css'

const HomeCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

    return (
        <WindowCard title="Carousel Example">
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
                <button className="embla__prev" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </WindowCard>
    )
}

export default HomeCarousel;
