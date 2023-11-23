import React, { useState, useEffect } from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';
import BasicButton from '../../common/BasicButton';
import ProfileImg from '../../common/ProfileImg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { convertTimeAgo } from '../../../utils/convertTimeAgo';

const ProfileImgSize = {
  1: '40px',
  2: '72px',
  3: '128px',
};

const ProfileBar = ({
  src,
  username,
  rate,
  existGeneration = false,
  genType,
  genNum,
  existTimeAgo = false,
  createdAt,
  existFollow = false,
  followers,
  followings,
  existFollowBtn = false,
  isFollow,
  existMoreBtn = false,
  profileSize,
  handleOnClickBar,
  handleOnClickFollow,
  handleOnClickDots,
  style,
}) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    setTimeAgo(convertTimeAgo(createdAt));
  }, [createdAt]);

  return (
    <>
      <S.Wrapper style={style}>
        <div onClick={handleOnClickBar}>
          <ProfileImg
            src={src}
            style={{ width: ProfileImgSize[profileSize] }}
          />
        </div>
        <S.InfoBox onClick={handleOnClickBar}>
          <BasicText text={username} style={{ font: CS.font.labelSmall }} />
          {existGeneration && (
            <BasicText
              text={`${genType} ${genNum}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
          {existTimeAgo ? (
            <BasicText
              text={`${rate} ･ ${timeAgo}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          ) : (
            <BasicText text={rate} style={{ font: CS.font.paragraphSmall }} />
          )}
          {existFollow && (
            <BasicText
              text={`팔로워 ${followers} 팔로잉 ${followings}`}
              style={{ font: CS.font.paragraphSmall }}
            />
          )}
        </S.InfoBox>
        {existFollowBtn && (
          <BasicButton
            text={isFollow ? '팔로잉' : '팔로우'}
            handleOnClickButton={handleOnClickFollow}
            btnStyle={{
              width: '70px',
              height: '35px',
              borderRadius: '4px',
              backgroundColor: isFollow ? CS.color.primary : CS.color.accent,
            }}
            textStyle={{
              font: CS.font.labelSmall,
              color: CS.color.white,
            }}
          />
        )}
        {existMoreBtn && (
          <S.MoreBtn onClick={handleOnClickDots} style={{}}>
            <BsThreeDotsVertical size="24px" color={CS.color.contentTertiary} />
          </S.MoreBtn>
        )}
      </S.Wrapper>
    </>
  );
};

export default ProfileBar;