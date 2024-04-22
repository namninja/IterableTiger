//
//  NotificationService.m
//  IterableTigerNSE
//
//  Created by Nam Ngo on 4/12/24.
//

#import "NotificationService.h"
#import "IterableAppExtensions-Swift.h"
@import IterableAppExtensions;

@interface NotificationService ()

@property (nonatomic, strong) ITBNotificationServiceExtension *baseExtension;
@end

@implementation NotificationService
- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    self.baseExtension = [[ITBNotificationServiceExtension alloc] init];
    [self.baseExtension didReceiveNotificationRequest:request withContentHandler:contentHandler];
}

- (void)serviceExtensionTimeWillExpire {
    [self.baseExtension serviceExtensionTimeWillExpire];
}
@end
