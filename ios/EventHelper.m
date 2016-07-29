//
//  EventHelper.m
//  EventTest
//
//  Created by Lizi on 16/7/28.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "EventHelper.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
@implementation EventHelper

@synthesize bridge = _bridge;


RCT_EXPORT_MODULE();

- (void)testEvent
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"RCTNativeAppEventEmitter.emit"
                                               body:@{@"name": @"123"}];
}

RCT_EXPORT_METHOD(test)
{
  NSLog(@"TEST");
  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder"
                                               body:@{@"name": @"123"}];
}

@end
