"use client"
import ImageInput from '@/components/ImageInput'

const ImagesAndCta: React.FC = () => {
  return (
    <div className="bg-[var(--secondary-color)] w-1/2 mx-auto mt-20 text-white p-4 flex flex-col">
      <h2 className="mb-8">Images & Call to Action</h2>
      <label className="ml-4" htmlFor="imageInput">Cover Images</label>
      <ImageInput onImageSelect={() => { }} />
      <div className="ml-4 flex flex-col">
        <label htmlFor="cta">Call</label>
        <input type="text" className="bg-[var(--primary-color)] rounded-md p-2 w-1/2" placeholder="Button Text" />
      </div>
    </div>
  )
}

export default ImagesAndCta;
