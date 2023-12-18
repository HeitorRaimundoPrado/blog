"use client";

import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import '@/style/text-editor-override.css'

const TextEditor = () => {
  const [content, setContent] = useState<string>('');

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="mt-20 w-1/2 mx-auto h-80 rounded-md">
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default TextEditor; 
