import React from 'react'

const Recommendation = ({videos}) => {
  return (
    <>
      {videos && videos.length > 0 &&
      <>
        <h2>Videos</h2>
        {videos.map((item, key) => (
          <div className="video-wrapper">
            <iframe
                key={key}
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                allow="accelerometer; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
          </div>
        ))
        }
      </>
      }
    </>
  )
}

export default Recommendation