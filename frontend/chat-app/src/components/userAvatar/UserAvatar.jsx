import { Avatar } from 'antd'
import { getInitials } from '../../utils/helper';
import "./UserAvatar.css"

const UserAvatar = ({ src, name, size, className = "", onClick, children, ...props }) => {

    return (
        <div className="avatar-main">
            <Avatar size={size} src={src} className={className} onClick={onClick} {...props}>
                {!src && (getInitials(name))}
            </Avatar>
        </div>

    )
}

export default UserAvatar