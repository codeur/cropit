import $ from 'jquery'
import { ERRORS } from '../src/constants'
import options from '../src/options'
import Cropit from '../src/cropit'

jest
  .dontMock('jquery')
  .dontMock('../src/constants')
  .dontMock('../src/options')
  .dontMock('../src/cropit')

const IMAGE_URL = 'http://example.com/image.jpg'
const IMAGE_DATA = 'data:image/jpeg;base64,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'
// import IMAGE_DATA from 'raw-loader!./fixtures/sample.jpg.base64'; // 'data:image/png;base64,image-data...';

const newCropit = (options) => {
  return new Cropit($, null, options)
}

describe('Cropit', () => {
  let cropit = null

  it('sets default options', () => {
    cropit = newCropit()

    options.values.forEach((o) => {
      expect(cropit.options[o.name]).toBe(o.default)
    })
  })

  describe('#init', () => {
    it('calls loadImage if image source is present', () => {
      cropit = newCropit({ imageState: { src: IMAGE_URL } })
      spyOn(cropit, 'loadImage')

      cropit.init()
      expect(cropit.loadImage).toHaveBeenCalled()
    })
  })

  describe('#onFileReaderLoaded', () => {
    beforeEach(() => {
      cropit = newCropit()
    })

    it('calls loadImage', () => {
      spyOn(cropit, 'loadImage')

      cropit.onFileReaderLoaded({ target: { result: IMAGE_DATA } })
      expect(cropit.loadImage).toHaveBeenCalled()
    })
  })

  describe('#loadImage', () => {
    beforeEach(() => {
      cropit = newCropit()
    })

    it('sets test image source', () => {
      expect(cropit.preImage.src).not.toBe(IMAGE_DATA)

      cropit.loadImage(IMAGE_DATA)
      expect(cropit.preImage.src).toBe(IMAGE_DATA)
    })
  })

  describe('#onPreImageLoaded', () => {
    describe('reject small images', () => {
      beforeEach(() => {
        cropit = newCropit({ width: 2, height: 2, smallImage: 'reject' })
      })

      it('rejects image where image width is smaller than preview width', () => {
        spyOn(cropit, 'onImageError')
        cropit.preImage = { width: 1, height: 3 }
        cropit.onPreImageLoaded()
        expect(cropit.onImageError).toHaveBeenCalled()
      })

      it('rejects image where image height is smaller than preview height', () => {
        spyOn(cropit, 'onImageError')
        cropit.preImage = { width: 3, height: 1 }
        cropit.onPreImageLoaded()
        expect(cropit.onImageError).toHaveBeenCalledWith(ERRORS.SMALL_IMAGE)
      })

      it('does not reject image if it is larger than preview', () => {
        spyOn(cropit, 'onImageError')
        cropit.preImage = { width: 3, height: 3 }
        cropit.onPreImageLoaded()
        expect(cropit.onImageError).not.toHaveBeenCalledWith(ERRORS.SMALL_IMAGE)
      })
    })

    describe('reject small images and exportZoom is not 1', () => {
      beforeEach(() => {
        cropit = newCropit({ width: 2, height: 2, smallImage: 'reject', exportZoom: 2 })
      })

      it('rejects image if image is smaller than preview after applying exportZoom', () => {
        spyOn(cropit, 'onImageError')
        cropit.preImage = { width: 3, height: 3 }
        cropit.onPreImageLoaded()
        expect(cropit.onImageError).toHaveBeenCalledWith(ERRORS.SMALL_IMAGE)
      })
    })

    describe('reject small images and maxZoom is not 1', () => {
      beforeEach(() => {
        cropit = newCropit({ width: 4, height: 4, smallImage: 'reject', maxZoom: 2 })
      })

      it('does not reject image if maxZoom allows image to be zoomed beyond preview', () => {
        spyOn(cropit, 'onImageError')
        cropit.preImage = { width: 3, height: 3 }
        cropit.onPreImageLoaded()
        expect(cropit.onImageError).not.toHaveBeenCalledWith(ERRORS.SMALL_IMAGE)
      })
    })

    describe('allow small images', () => {
      beforeEach(() => {
        cropit = newCropit({ width: 2, height: 2, smallImage: 'allow' })
      })

      it('does not reject small image', () => {
        spyOn(cropit, 'onImageError')
        cropit.preImage = { width: 1, height: 1 }
        cropit.onPreImageLoaded()
        expect(cropit.onImageError).not.toHaveBeenCalled()
      })
    })

    it('sets image.src if everything passes', () => {
      cropit = newCropit({ width: 1, height: 1 })
      cropit.preImage = { src: IMAGE_DATA }
      expect(cropit.image.src).not.toBe(IMAGE_DATA)

      cropit.onPreImageLoaded()
      expect(cropit.image.src).toBe(IMAGE_DATA)
    })
  })

  describe('#onImageLoaded', () => {
    it('centers image', () => {
      cropit = newCropit({ width: 1, height: 1 })
      spyOn(cropit, 'centerImage')
      cropit.onImageLoaded()
      expect(cropit.centerImage).toHaveBeenCalled()
    })

    it('sets zoom to 1 if initialZoom is image', () => {
      cropit = newCropit({ width: 1, height: 1, initialZoom: 'image' })
      expect(cropit.zoom).not.toBe(1)

      cropit.image = { width: 2, height: 2 }
      cropit.onImageLoaded()
      expect(cropit.zoom).toBe(1)
    })
  })

  describe('#onPreviewEvent', () => {
    describe('mouse event', () => {
      const previewEvent = {
        type: 'mousedown',
        clientX: 1,
        clientY: 1,
        stopPropagation: () => {}
      }

      beforeEach(() => {
        cropit = newCropit()
      })

      it('sets origin coordinates on mousedown', () => {
        expect(cropit.origin).not.toEqual({ x: 1, y: 1 })

        cropit.imageLoaded = true
        cropit.onPreviewEvent(previewEvent)
        expect(cropit.origin).toEqual({ x: 1, y: 1 })
      })

      it('calls stopPropagation', () => {
        spyOn(previewEvent, 'stopPropagation')
        cropit.imageLoaded = true
        cropit.onPreviewEvent(previewEvent)
        expect(previewEvent.stopPropagation).toHaveBeenCalled()
      })

      it('does nothing before loading image', () => {
        spyOn(previewEvent, 'stopPropagation')
        cropit.onPreviewEvent(previewEvent)
        expect(cropit.origin).not.toEqual({ x: 1, y: 1 })
        expect(previewEvent.stopPropagation).not.toHaveBeenCalled()
      })
    })

    describe('touch event', () => {
      const previewEvent = {
        type: 'touchstart',
        originalEvent: { touches: [{ clientX: 1, clientY: 1 }] },
        stopPropagation: () => {}
      }

      beforeEach(() => {
        cropit = newCropit()
      })

      it('sets origin coordinates on mousedown', () => {
        expect(cropit.origin).not.toEqual({ x: 1, y: 1 })

        cropit.imageLoaded = true
        cropit.onPreviewEvent(previewEvent)
        expect(cropit.origin).toEqual({ x: 1, y: 1 })
      })

      it('calls stopPropagation', () => {
        spyOn(previewEvent, 'stopPropagation')
        cropit.imageLoaded = true
        cropit.onPreviewEvent(previewEvent)
        expect(previewEvent.stopPropagation).toHaveBeenCalled()
      })

      it('does nothing before loading image', () => {
        spyOn(previewEvent, 'stopPropagation')
        cropit.onPreviewEvent(previewEvent)
        expect(cropit.origin).not.toEqual({ x: 1, y: 1 })
        expect(previewEvent.stopPropagation).not.toHaveBeenCalled()
      })
    })
  })

  describe('#fixOffset', () => {
    beforeEach(() => {
      cropit = newCropit({ width: 1, height: 1 })
      cropit.imageLoaded = true
      cropit._rotation = 0
    })

    describe('fixes x', () => {
      it('fits image to left if image width is less than preview', () => {
        cropit.image = { width: 1 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ x: -1 })
        expect(offset.x).toBe(0)
      })

      it('fits image to left', () => {
        cropit.image = { width: 4 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ x: 1 })
        expect(offset.x).toBe(0)
      })

      it('fits image to right', () => {
        cropit.image = { width: 4 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ x: -2 })
        expect(offset.x).toBe(-1)
      })

      it('rounds x', () => {
        cropit.image = { width: 4 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ x: -0.12121 })
        expect(offset.x).toBe(-0.12)
      })
    })

    describe('fixes y', () => {
      it('fits image to top if image height is less than preview', () => {
        cropit.image = { height: 1 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ y: -1 })
        expect(offset.y).toBe(0)
      })

      it('fits image to top', () => {
        cropit.image = { height: 4 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ y: 1 })
        expect(offset.y).toBe(0)
      })

      it('fits image to bottom', () => {
        cropit.image = { height: 4 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ y: -2 })
        expect(offset.y).toBe(-1)
      })

      it('rounds y', () => {
        cropit.image = { height: 4 }
        cropit._zoom = 0.5
        const offset = cropit.fixOffset({ y: -0.12121 })
        expect(offset.y).toBe(-0.12)
      })
    })

    it('takes rotation into account', () => {
      cropit.image = { width: 2, height: 1 }
      cropit._zoom = 1
      cropit._rotation = 90

      const offset = cropit.fixOffset({ x: -0.5, y: -0.5 })
      expect(offset).toEqual({ x: 0, y: -0.5 })
    })
  })

  describe('#centerImage', () => {
    it('should center image', () => {
      cropit = newCropit({ width: 4, height: 2 })
      cropit.imageLoaded = true
      cropit.image = { width: 12, height: 8 }
      cropit._zoom = 0.5
      cropit._rotation = 0

      cropit.offset = { x: 0, y: 1 }
      expect(cropit.offset).not.toEqual({ x: -1, y: -1 })

      cropit.centerImage()
      expect(cropit.offset).toEqual({ x: -1, y: -1 })
    })
  })

  describe('#fixZoom', () => {
    it('returns zoomer.fixZoom()', () => {
      cropit = newCropit()

      cropit.zoomer = { fixZoom: () => 0.1 }
      expect(cropit.fixZoom()).toBe(0.1)

      cropit.zoomer = { fixZoom: () => 0.5 }
      expect(cropit.fixZoom()).toBe(0.5)

      cropit.zoomer = { fixZoom: () => 1 }
      expect(cropit.fixZoom()).toBe(1)
    })
  })

  describe('#isZoomable', () => {
    it('returns zoomer.isZoomable', () => {
      cropit = newCropit()

      cropit.zoomer = { isZoomable: () => true }
      expect(cropit.isZoomable()).toBe(true)

      cropit.zoomer = { isZoomable: () => false }
      expect(cropit.isZoomable()).toBe(false)
    })
  })

  describe('#get imageState', () => {
    it('returns image state', () => {
      cropit = newCropit()
      cropit.image = { src: IMAGE_DATA }
      cropit.offset = { x: -1, y: -1 }
      cropit._zoom = 0.5
      const imageState = cropit.imageState
      expect(imageState.src).toBe(IMAGE_DATA)
      expect(imageState.offset).toEqual({ x: -1, y: -1 })
      expect(imageState.zoom).toBe(0.5)
    })
  })

  describe('#set previewSize', () => {
    it('updates zoomer if image is loaded', () => {
      cropit = newCropit()
      cropit.imageLoaded = true
      cropit.image = { width: 2, height: 2 }
      cropit._offset = { x: 0, y: 0 }
      spyOn(cropit.zoomer, 'setup')
      cropit.previewSize = { width: 1, height: 1 }
      expect(cropit.zoomer.setup).toHaveBeenCalled()
    })
  })
})
