export const template = ({src, alt}: Pick<HTMLImageElement, 'src' | 'alt'>) => {
  return (
    <>
      <img src={src} loading="lazy" alt={alt} />
      <figcaption>{alt}</figcaption>
    </>
  )
}
