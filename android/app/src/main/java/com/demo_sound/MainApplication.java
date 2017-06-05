package com.demo_sound;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.realm.react.RealmReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.rnfs.RNFSPackage;
import com.audioStreaming.ReactNativeAudioStreamingPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import io.realm.react.RealmReactPackage;
import com.rnfs.RNFSPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.audioStreaming.ReactNativeAudioStreamingPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.xeodou.rctplayer.*;  // <--- import

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RealmReactPackage(),
            new VectorIconsPackage(),
            new RNSoundPackage(),
            new RNFSPackage(),
            new ReactNativeAudioStreamingPackage(),
            new ReactNativeAudioPackage(),
            //new RealmReactPackage(),
            //new RNFSPackage(),
            //new ReactNativeAudioPackage(),
            //new ReactNativeAudioStreamingPackage(),
            //new RNSoundPackage(),
            new ReactPlayerManager()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
