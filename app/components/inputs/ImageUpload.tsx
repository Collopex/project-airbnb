'use client';

import React, { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

type ImageUploadProps = {
  onChange: (value: string) => void;
  value: string;
};

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset='agy7zpb0'
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className='relative cursor-pointer hover:opacity-70 transition border-1 border-dashed p-20
             border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600'
          >
            <TbPhotoPlus size={50} />
            <div className='font-semibold text-lg'>Click to upload</div>

            {value && (
              <div className='absolute inset-0 w-full h-full'>
                <Image
                  alt='upload'
                  fill
                  sizes='auto'
                  style={{ objectFit: 'cover' }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
