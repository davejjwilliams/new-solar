import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './CarouselAutoplay'
import { useAutoplayProgress } from './CarouselAutoplayProgress'
import WindowCard from '../WindowCard'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './CarouselArrowButtons'
import { IoPlayOutline, IoPauseOutline } from 'react-icons/io5';
import '../../../styles/Carousel.css'
import news from '../../../news.json'

const NewsCarousel = () => {
    const progressNode = useRef<HTMLDivElement>(null)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi)
    const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode as React.RefObject<HTMLElement>)

    return (
        <WindowCard title="News">
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <div className={`embla__progress`.concat(showAutoplayProgress ? '' : ' embla__progress--hidden')}>
                    <div className="embla__progress__bar" ref={progressNode} />
                </div>

                <button className="embla__button" onClick={toggleAutoplay} type="button">
                    {autoplayIsPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
                </button>
            </div>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {news.map((item) => (
                        <div key={item.id} className="embla__slide">
                            <h1>{item.title}</h1>
                            <div className="news-body">
                                {item.body.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WindowCard>
    )
}

export default NewsCarousel;
