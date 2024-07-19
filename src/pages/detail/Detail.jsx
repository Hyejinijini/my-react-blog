import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  const { id } = useParams() // URL에서 id 파라미터 가져오기
  const [album, setAlbum] = useState([])
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      setPhoto(res.data)
    })
    axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
      setAlbum(res.data)
    })
  }, [])

  useEffect(() => {
    // albums.json에서 id에 해당하는 앨범 데이터 찾기
    const foundAlbum = albumsData.find((album) => album.id === parseInt(id))
    // photos.json에서 앨범의 userId와 매칭되는 포토 데이터 찾기
    const foundPhoto = photosData.find((photo) => photo.id === foundAlbum.id)

    setAlbum(foundAlbum)
    setPhoto(foundPhoto)
  }, [id])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Detail</h1>
      <div className="bg-white shadow-sm p-4 rounded-md">
        <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-auto" />
        <h2 className="text-xl font-semibold mt-2">{album.title}</h2>
        <p>{photo.title}</p>
      </div>
    </div>
  )
}

export default Detail
