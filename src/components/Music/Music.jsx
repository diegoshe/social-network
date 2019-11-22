import React from 'react';
import s from "./Music.module.css";


const Music = (props) => {

    return (
	    <div ><iframe title="myMusic"
	                  frameBorder="0"
	                  styles="border:none;width:100%;height:500px;"
	                  width="100%"
	                  height="500"
	                  src="https://music.yandex.ru/iframe/#playlist/yamusic-daily/107178735/show/cover/description/">Слушайте
		    <a href='https://music.yandex.ru/users/yamusic-daily/playlists/107178735'>Плейлист дня</a>
		    <a href='https://music.yandex.ru/users/yamusic-daily'>yamusic-daily</a> на Яндекс.Музыке
	    </iframe>
	    </div>
    )
}

export default Music;
