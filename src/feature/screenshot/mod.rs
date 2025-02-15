mod platform;
pub use platform::take_screenshot;

#[derive(Debug)]
/// Represents an error while taking a screenshot
pub enum ScreenshotError {
    Other(String)
}

unsafe impl Send for ScreenshotError {}
unsafe impl Sync for ScreenshotError {}
