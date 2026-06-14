function CarouselControls({ onPrev, onNext }) {
  return (
    <div>
      <button onClick={onPrev}>
        Anterior
      </button>

      <button onClick={onNext}>
        Próximo
      </button>
    </div>
  )
}

export default CarouselControls