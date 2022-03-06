import { Facybox, Carouesel, Panzoom } from '@facyapps/ui'

import '@fancyapps/ui/dist/fancybox.esm'

Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    )
  }
})
