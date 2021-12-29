import { useSelector } from 'react-redux';
import './loading.scss';

function Loading() {

  const isShow = useSelector((state) => state.loading.isShow);

  return (
    <>
      {
        isShow && <div className="loading-element">
          <div className="loading-container timing-function">
            <div className="pg-icon circle-progress-animation-dot-1" id="pg-icon-1"></div>
            <div className="pg-icon circle-progress-animation-dot-2" id="pg-icon-2"></div>
            <div className="pg-icon circle-progress-animation-dot-3" id="pg-icon-3"></div>
            <div className="pg-icon circle-progress-animation-dot-4" id="pg-icon-4"></div>
          </div>
        </div>
      }
    </>
  )
}
export default Loading;