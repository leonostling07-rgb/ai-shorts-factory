import { Composition } from 'remotion';
import { TalkingScene } from './scenes/TalkingScene';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TalkingScene"
        component={TalkingScene}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
