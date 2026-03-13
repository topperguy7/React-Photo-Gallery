import { useState, useReducer, useMemo, useCallback} from 'react'
import { useFetchPhotos } from './components/useFetchPhotos';
import { favoritesReducer, initialState } from './components/favouritesReducer';

function App(){

  const {photos, loading, error} = useFetchPhotos();
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  if(loading) return (
    <div className='flex justify-center items-center h-screen'>
      <div className='h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
    </div>);

  if(error) return (
  <div className='flex justify-center items-center h-screen'>
    error: {error}
  </div>)

  return(
    <>
      <div className="m-4 flex justify-center ">
        <h1 className="text-4xl font-bold bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent">Photo Gallery</h1>
      </div>
      <div className="flex justify-center mb-8">
        <input
        type="text"
        placeholder="Search by author"
        value={searchTerm}
        onChange={handleSearch}
        className="border-2 p-1 rounded-md text-2xl focus:outline-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="m-4 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={photo.download_url} alt={photo.author} className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <p className="font-medium truncate">{photo.author}</p>
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: photo.id })}
              className="focus:outline-none"
              >
                <span className={`text-2xl ${favorites.includes(photo.id) ? 'text-red-500' : 'text-gray-300'}`}>
                  ♥
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default App;