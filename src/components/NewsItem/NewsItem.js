import style from './NewsItem.module.css'
import { Link } from 'react-router-dom'
import { domainToHostName, openExternalUrl, unixToDate } from '../../utils/utils'

export function NewsItem(props) {
    const { title, username, score, date, className = '', url } = props
    const scoreClassArr = [style.score]
    if (score > 50) {
        scoreClassArr.push(style.highScore)
    } else if (score > 30) {
        scoreClassArr.push(style.middleScore)
    } else {
        scoreClassArr.push(style.lowScore)
    }

    return (
        <div className={`${style.container} ${className}`}>
            <Link className={style.link} to={`comments/${props.id}`}>{title}</Link>

            <div className={style.info}>
                <div className={style.userData}>
                    <span>{username} | </span>
                    <span>{unixToDate(date)}</span>
                </div>
                {url ? (
                    <div className={style.externalLink} onClick={() => openExternalUrl(url)}>{domainToHostName(url)}</div>
                ) : (
                    <div className={scoreClassArr.join(' ')}>
                        {score} points
                    </div>
                )}

            </div>
        </div >
    )
}