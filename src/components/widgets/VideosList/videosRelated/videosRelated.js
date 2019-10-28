import React from 'react';
import styles from '../videosList.css';

import VideoListTemplate from '../videoListTemplate'

const VideosRelated = (props) =>  (
    <div className={styles.relatedWrapper}>
        <VideoListTemplate 
          data={props.data}
          teams={props.teams}
        />
    </div>
  );


export default VideosRelated;