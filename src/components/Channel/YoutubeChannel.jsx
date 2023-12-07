import React from 'react';
import { StChannelContainer, StChannelInfo, StChannelLogo } from './styles';

export default function YoutubeChannel({ name, channelId }) {
  return (
    <StChannelContainer id={channelId}>
      <StChannelLogo>
        <img
          src="https://yt3.ggpht.com/Svf9qMcY0H0z96y2f-xejBmdzVncWpBE9mjUGFXNsb41U9M2Jhyz0NVhAs8Mf67XsKEydVBOTas=s88-c-k-c0x00ffffff-no-rj"
          alt="채널 로고"
        />
      </StChannelLogo>
      <StChannelInfo>
        <h3>{name}</h3>
      </StChannelInfo>
    </StChannelContainer>
  );
}
