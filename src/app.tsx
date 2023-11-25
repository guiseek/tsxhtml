import {Gallery} from './elements/gallery/element'
import {Input, DataList} from './elements/form'
import {images} from './data/images'

export const app = () => {
  const options = images.map(({alt}) => new Option(alt, alt))
  const searchList = new DataList({id: 'searchList'})
  searchList.add(...options)

  const gallery = new Gallery()
  gallery.render(images)

  const search = new Input({
    type: 'search',
    name: 'search',
    placeholder: 'Buscar...',
  })
  search.setAttribute('list', 'searchList')

  search.oninput = () => {
    const list = images.filter((image) => image.alt.includes(search.value))
    gallery.clear()
    gallery.render(list)
  }

  return (
    <>
      <header>
        <h1>Seek</h1>

        {search}
        {searchList}
      </header>

      <main>{gallery}</main>
    </>
  )
}
