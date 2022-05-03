#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UserNotifications.h>
@import IterableSDK;

@interface AppDelegate : UIResponder <UIApplicationDelegate, UNUserNotificationCenterDelegate, IterableURLDelegate, IterableCustomActionDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
