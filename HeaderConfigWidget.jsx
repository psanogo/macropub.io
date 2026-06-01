import React, { useState } from 'react';

/**
 * HeaderConfigWidget - A UI component for configuring the MacroPub header.
 * Provides options for visibility, image sourcing, and layout placement.
 */
const HeaderConfigWidget = () => {
  const [showWidget, setShowWidget] = useState(true);
  const [imageSource, setImageSource] = useState('none'); // options: 'none', 'url', 'upload'
  const [imageUrl, setImageUrl] = useState('');
  const [placement, setPlacement] = useState('behind'); // options: 'behind', 'instead', 'after', 'shrink'

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md font-sans text-gray-900">
      <header className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-xl font-bold text-gray-800">Configure Header</h1>
      </header>

      {/* Widget Visibility */}
      <div className="flex items-center gap-3 mb-8 p-3 bg-blue-50 rounded-md border border-blue-100">
        <input
          id="show-widget-checkbox"
          type="checkbox"
          className="w-5 h-5 accent-blue-600 cursor-pointer"
          checked={showWidget}
          onChange={(e) => setShowWidget(e.target.checked)}
        />
        <label htmlFor="show-widget-checkbox" className="text-sm font-semibold cursor-pointer select-none">
          Show this widget
        </label>
      </div>

      <div className="mb-6">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Header Title</p>
        <p className="text-lg font-medium text-gray-700">MacroPub — Data, Security & AI</p>
      </div>

      {/* Image Selection */}
      <fieldset className="mb-8">
        <legend className="text-sm font-bold text-gray-600 mb-4">Select image by:</legend>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="imgSrc"
              className="w-4 h-4 accent-blue-600"
              checked={imageSource === 'none'}
              onChange={() => setImageSource('none')}
            />
            <span className="text-sm group-hover:text-blue-600 transition-colors">No image</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="imgSrc"
              className="w-4 h-4 accent-blue-600"
              checked={imageSource === 'url'}
              onChange={() => setImageSource('url')}
            />
            <span className="text-sm group-hover:text-blue-600 transition-colors">Input image URL</span>
          </label>
          {imageSource === 'url' && (
            <input
              type="url"
              placeholder="https://example.com/logo.png"
              className="w-full mt-1 p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          )}

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="imgSrc"
              className="w-4 h-4 accent-blue-600"
              checked={imageSource === 'upload'}
              onChange={() => setImageSource('upload')}
            />
            <span className="text-sm group-hover:text-blue-600 transition-colors">Upload image from computer</span>
          </label>
          {imageSource === 'upload' && (
            <input
              type="file"
              className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
            />
          )}
        </div>
      </fieldset>

      {/* Placement Logic */}
      <fieldset className="mb-8">
        <legend className="text-sm font-bold text-gray-600 mb-4">Image Placement</legend>
        <div className="space-y-3">
          {[
            { id: 'behind', label: 'Behind title and description' },
            { id: 'instead', label: 'Instead of title and description' },
            { id: 'after', label: 'Have description placed after the image' },
            { id: 'shrink', label: 'Shrink to fit (150 pixels wide)' },
          ].map((opt) => (
            <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="placement"
                className="w-4 h-4 accent-blue-600"
                checked={placement === opt.id}
                onChange={() => setPlacement(opt.id)}
              />
              <span className="text-sm group-hover:text-blue-600 transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex gap-4">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors shadow-sm">
          Save Configuration
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded font-bold hover:bg-gray-200 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default HeaderConfigWidget;
