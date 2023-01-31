import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageBaseUrl, movieStub as mediaInfo2 } from "../../utils/constants";
import { getMediaInfo, getSimilar } from "../../utils/fetchFromAPI";
import { DetailsView, TrendingContent } from "../exports";
const Details = () => {
  const { mediaType, id } = useParams();
  const [mediaInfo, setmediaInfo] = useState(mediaInfo2);
  const [similarMedia, setsimilarMedia] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    console.log('useeffectcalled')
    if (localStorage.getItem(`mediaInfo-${id}`)) {
      setmediaInfo(JSON.parse(localStorage.getItem(`mediaInfo-${id}`)!));
      setloading(false);
    } else {
      getMediaInfo(mediaType!, id!).then((data) => {
        setmediaInfo(data);
        localStorage.setItem(`mediaInfo-${id}`, JSON.stringify(data));
        setloading(false);
      });
    }
    getSimilar(mediaType!, 1, id!).then((data) => {
      setsimilarMedia(data);
    });
  }, [id, mediaType]);

  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-gray-900"></div>
      ) : (
        <div
          className="min-h-screen  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(16, 22, 36, 0.22) 0%, rgba(9, 12, 20, 0.9) 30.82%, #0E1320 51.12%, #111827 100%),url(${imageBaseUrl}/w1280${mediaInfo.backdrop_path})`,
          }}
        >
          <DetailsView
            mediaInfo={mediaInfo}
            mediaType={mediaType!}
            mediaId={id!}
          />
          <TrendingContent
            key={id}
            trendingList={similarMedia}
            mediaType={mediaType!}
            headingTitle="Similar"
          />
        </div>
      )}
    </>
  );
};

export default Details;
