import React, { useState } from 'react';

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        SetImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    };
  }
};
