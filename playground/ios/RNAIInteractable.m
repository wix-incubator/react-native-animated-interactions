
#import "RNAIInteractable.h"
#import <React/RCTViewManager.h>
#import <React/RCTComponent.h>

@interface RNAIInteractable()

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end

@implementation RNAIInteractable


@end




//Manager
@interface RNAIInteractableManager : RCTViewManager
@end
@implementation RNAIInteractableManager

RCT_EXPORT_MODULE();

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL);

-(UIView *)view
{
  return [RNAIInteractable new];
}

@end
