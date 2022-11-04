# Google Chrome reader extension

Download the [Reeader extension for Google chrome](https://chrome.google.com/webstore/detail/reeader-minimal-reader-fo/jblbdklppkompnbobkpncbmbjkaeaeah).

![Chrome extensions tab](./screenshot.jpg)

## Running extension in development mode

Enable developer mode in Google Chrome and click on 'Load unpacked' and select the extensions folder of the repo. You can now use the extension on any website.

![Chrome extensions tab](./screenshot1.png)

## Development environment setup

Make sure you are in `dev` branch by running `git checkout dev`.

Run `npm install` to start the development server. The source code is in src folder and is powered by React.

### Updating the extension
Run `npm run build` to generate the production code and refresh the extension.

### TO REMOVE CSS AND METHODS
            <header className={`rr-app-header ${activeTheme}`}>
              <div className="rr-app-header__content">
                <span
                  className="rr-button--close"
                  onClick={() => this.closeReader()}
                >
                  Close
                </span>
                <div className="rr-theme--toggle">
                  <span
                    onClick={() => this.toggleSpeedReading()}
                    className={
                      this.state.speedReading
                        ? "dr-button--action dr-active dr-speed--toggle"
                        : "dr-button--action dr-speed--toggle"
                    }
                  >
                    <img
                      src={speedIcon}
                      className="dr-icons"
                      title="Speed Reading"
                      alt=""
                    />
                  </span>

                  <span
                    onClick={() => this.toggleStopWordFade()}
                    className={
                      this.state.contentWithoutStop !== null
                        ? "dr-button--action dr-active dr-speed--toggle"
                        : "dr-button--action dr-speed--toggle"
                    }
                  >
                    <img
                      src={moreSpeedIcon}
                      className="dr-icons"
                      title="Speed Reading"
                      alt=""
                    />
                  </span>

                  <span
                    className="rr-font--update rr-dec"
                    onClick={() => this.decreaseFontSize()}
                  >
                    A
                  </span>
                  <span
                    className="rr-font--update rr-inc"
                    onClick={() => this.increaseFontSize()}
                  >
                    A
                  </span>

                  <span
                    className="rr-theme--change theme-white"
                    onClick={() => this.toggleTheme(0)}
                  ></span>
                  <span
                    className="rr-theme--change theme-yellow"
                    onClick={() => this.toggleTheme(1)}
                  ></span>
                  <span
                    className="rr-theme--change theme-dark"
                    onClick={() => this.toggleTheme(2)}
                  ></span>
                  <div className="rr-popup-toggle__wrapper">
                    <div
                      className="rr-popup-toggle--button"
                      onClick={() => this.togglePopup()}
                    >
                      <figure></figure>
                      <figure></figure>
                      <figure></figure>
                    </div>
                    {this.state.popupMenu && (
                      <Popup
                        theme={this.state.theme}
                        editLineHeight={action => this.editLineHeight(action)}
                        toggleFontWeight={() => this.toggleFontWeight()}
                        fontWeight={this.state.fontWeight === 600}
                      />
                    )}
                  </div>
                </div>
              </div>
            </header>
